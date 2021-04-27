import React, { Component } from 'react';
import Axios from 'axios';

class MovieDetailsPage extends Component {
  state = {
    id: null,
    title: null,
    poster_path: null,
    overview: null,
    genres: [],
    release_date: null,
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movie_id;
    // console.log(movie);

    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=4ba31ae74c8b6119033f94598087ffb2`,
    );

    this.setState({ ...response.data });
    console.log(this.state);
  }

  render() {
    const {
      id,
      title,
      poster_path,
      overview,
      genres,
      release_date,
    } = this.state;

    return (
      <>
        <img src={poster_path} alt="" />

        <h2>
          {title} ({release_date})
        </h2>

        <h3>Overview</h3>
        <p>{overview}</p>

        <h3>Genres</h3>
        {genres.map(genre => (
          <li>{genre.name}</li>
        ))}

        <h4>Additional information</h4>
      </>
    );
  }
}

export default MovieDetailsPage;
