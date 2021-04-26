import React, { Component } from 'react';
import Axios from 'axios';

class MovieDetailsPage extends Component {
  state = {
    id: null,
    title: null,
    poster_path: null,
    overview: null,
    genre_ids: null,
    release_date: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    console.log(this.props.match.params);
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=4ba31ae74c8b6119033f94598087ffb2`,
    );

    this.setState({ ...response.data });
  }

  render() {
    const {
      id,
      title,
      poster_path,
      overview,
      genre_ids,
      release_date,
    } = this.state;

    return (
      <>
        <h1>Movie {this.props.match.params.movieId}</h1>
        <img src={poster_path} alt="" />
        <h2>{title}</h2>
        <p>{release_date}</p>
        <p>{overview}</p>
      </>
    );
  }
}

export default MovieDetailsPage;
