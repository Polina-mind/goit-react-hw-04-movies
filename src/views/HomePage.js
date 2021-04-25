import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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

    return (
      <>
        <h1>Home</h1>
        <ul>
          {trendingMovies.map(trendingMovie => (
            <li key={trendingMovie.id}>
              <NavLink to={`${match.url}/${trendingMovie.id}`}>
                {trendingMovie.title}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* <Route
          path={`${match.path}/:trendingMovieId`}
          render={props => {
            const movieId = Number(props.match.params.authorId);
            const trendingMovie = this.state.trendingMovies.find(
              ({ id }) => id === movieId,
            );

            return (
              trendingMovie && (
                <Cast {...props} trendingMovies={trendingMovie.movies} />
              )
            );
          }}
        /> */}
      </>
    );
  }
}

export default HomePage;
