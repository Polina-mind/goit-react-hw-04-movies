import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
// import Reviews from './Reviews';
import Cast from './Cast';
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

    this.changeYear();
  }

  changeYear = () => {
    const year = this.state.release_date.slice(0, 4);
    this.setState({ release_date: year });
  };

  render() {
    const { match } = this.props;
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
        <div className="FilmInfo">
          <img
            src={`https://image.tmdb.org/t/p/w154${poster_path}`}
            alt={title}
            width="200"
            className="Poster"
          />
          <div>
            <h2 className="TitleName">
              {title} ({release_date})
            </h2>
            <h3 className="TitleName">Overview</h3>
            <p className="Overview">{overview}</p>
            <h3 className="TitleName">Genres</h3>
            {genres.map(genre => (
              <li className="Genre">{genre.name}</li>
            ))}
          </div>
        </div>

        <h4 className="TitleName">Additional information</h4>
        <ul>
          <li>
            <Link to={`${match.url}/cast`}>Cast</Link>
            <Route path={`${match.path}/cast`} component={Cast} />
          </li>

          <li>
            <Link to={`${match.url}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </>
    );
  }
}

export default MovieDetailsPage;
