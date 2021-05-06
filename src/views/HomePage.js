import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

    return (
      <>
        <h1 className="Title">Trending Today</h1>
        <ul>
          {trendingMovies.map(trendingMovie => (
            <li key={trendingMovie.id}>
              <Link to={`${match.url}movies/${trendingMovie.id}`}>
                {trendingMovie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
