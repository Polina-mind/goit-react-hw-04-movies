import React, { Component } from 'react';
import MoviesList from '../components/MoviesList';
import { fetchTrendMovies } from '../services/getData';

class HomePage extends Component {
  state = {
    movies: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    fetchTrendMovies().then(trendMovies =>
      this.setState({
        movies: trendMovies,
        isLoading: false,
      }),
    );
  }

  render() {
    const { movies, isLoading } = this.state;
    const { match, location } = this.props;

    return (
      <>
        <h1 className="Title">Trending Today</h1>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          movies.length > 0 && (
            <MoviesList
              movies={movies}
              url={`${match.url}movies`}
              location={location}
            />
          )
        )}
      </>
    );
  }
}

export default HomePage;
