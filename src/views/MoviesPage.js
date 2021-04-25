import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class MoviesPage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=4ba31ae74c8b6119033f94598087ffb2&query=man`,
    );

    this.setState({ movies: response.data.results });
    // console.log(response.data.results);
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        <h1>Movies</h1>

        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${this.props.match.url}/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
