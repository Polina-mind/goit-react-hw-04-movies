import React, { Component } from 'react';
import { fetchCast } from '../../services/getData';
import './Cast.css';

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;

    fetchCast(movieId).then(cast => this.setState({ cast: cast }));
  }

  render() {
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
                className="ActorPhoto"
              ></img>
              {actor.profile_path && <p className="ActorName">{actor.name}</p>}
              <p>{actor.character}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
