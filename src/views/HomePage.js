import React, { Component } from 'react';
import MoviesList from '../components/MoviesList';
import { fetchTrendMovies } from '../services/getData';

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetchTrendMovies().then(trendMovies =>
      this.setState({ movies: trendMovies }),
    );
  }

  render() {
    const { movies } = this.state;
    const { match, location } = this.props;

    return (
      <>
        <h1 className="Title">Trending Today</h1>

        {movies.length > 0 && (
          <MoviesList
            movies={movies}
            url={`${match.url}movies`}
            location={location}
          />
        )}
      </>
    );
  }
}

export default HomePage;
