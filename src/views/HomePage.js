import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Axios from 'axios';

class HomePage extends Component {
  state = {
    trendingMovies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=4ba31ae74c8b6119033f94598087ffb2`,
    );

    this.setState({ trendingMovies: response.data.results });
  }

  render() {
    const { match } = this.props;
    const { trendingMovies } = this.state;
    // console.log(trendingMovies);
    // console.log(this.props.match.url);

    return (
      <>
        <h1>Home</h1>
        <ul>
          {trendingMovies.map(trendingMovie => (
            <li key={trendingMovie.id}>
              <Link to={`${match.url}movies/${trendingMovie.id}`}>
                {trendingMovie.title}
              </Link>
            </li>
          ))}
        </ul>
        {/* <Route
          path={`${match.path}/:movieId`}
          render={props => {
            const movie_id = Number(props.match.params.movieId);
            const trendingMovie = this.state.trendingMovies.find(
              ({ id }) => id === movie_id,
            );

            return (
              trendingMovie && (
                <HomePage {...props} TrendingMovies={trendingMovie.movies} />
              )
            );
          }}
        /> */}
      </>
    );
  }
}

export default HomePage;
