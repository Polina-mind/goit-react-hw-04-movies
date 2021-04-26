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
    const { movie_id } = this.props.match.params;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=4ba31ae74c8b6119033f94598087ffb2`,
    );

    this.setState({ cast: response.data });
    console.log('response.data', response.data);
  }

  render() {
    const { match } = this.props;
    const { cast } = this.state;

    return (
      <>
        <h1>Cast</h1>

        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              <NavLink to={`${match.url}/${actor.id}`}>{actor.name}</NavLink>
            </li>
          ))}
        </ul>

        <Route
          path={`${match.path}/:movieId/cast`}
          render={props => {
            const movie_id = Number(props.match.params.movie_id);
            const actor = cast.find(({ id }) => id === movie_id);

            return actor && <Reviews {...props} CastList={actor.movie} />;
          }}
        />
      </>
    );
  }
}

export default Cast;
