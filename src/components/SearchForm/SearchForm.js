import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';

class SearchForm extends Component {
  static propTypes = {
    searchQuery: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  // static defaultProps = {
  //   searchQuery: '',
  // };

  state = {
    searchQuery: this.props.searchQuery,
  };

  handleChange = e => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.searchQuery);
    // this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="SearchForm-input"
          type="text"
          value={searchQuery}
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

export default SearchForm;
