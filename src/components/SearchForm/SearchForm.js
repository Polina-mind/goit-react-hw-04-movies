import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';

class SearchForm extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="SearchForm-input"
          type="text"
          value={this.searchQuery}
          onChange={this.handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search..."
        />

        <button type="submit" className="SearchFormButton">
          <span className="SearchForm-button-label">Search</span>
        </button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
