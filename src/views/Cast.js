import React, { Component } from 'react';
import Axios from 'axios';
import { NavLink, Route } from 'react-router-dom';
import Reviews from './Reviews';
import CastList from '../components/CastList';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movie_id;

    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=4ba31ae74c8b6119033f94598087ffb2`,
    );

    this.setState({ cast: response.data.cast });
    // console.log(this.state.cast);
  }

  render() {
    const { match } = this.props;
    const { cast } = this.state;

    return (
      <>
        <h1 className="Title">Cast</h1>
        <ul>
          {cast.map(actor => (
            <li key={actor.id} className="Actor">
              <img
                src={`https://image.tmdb.org/t/p/w154${actor.profile_path}`}
                alt={actor.name}
                width="120"
                className="ActorPhoto"
              ></img>
              <NavLink to={`${match.url}/${actor.id}`}>{actor.name}</NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
