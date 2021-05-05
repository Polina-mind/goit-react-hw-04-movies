import React, { Component } from 'react';
import Axios from 'axios';

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
