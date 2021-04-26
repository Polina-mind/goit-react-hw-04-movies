import React, { Component } from 'react';
import Axios from 'axios';
import { NavLink, Route } from 'react-router-dom';
import Cast from './Cast';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movie_id } = this.props.match.params;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=4ba31ae74c8b6119033f94598087ffb2`,
    );

    this.setState({ reviews: response.data });
    console.log(response.data);
  }

  render() {
    const { match } = this.props;
    const { reviews } = this.state;
    console.log(reviews);

    return (
      <>
        <h1>Reviews</h1>
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <NavLink to={`${match.url}/${review.id}`}>{review.name}</NavLink>
            </li>
          ))}
        </ul>

        <Route
          path={`${match.path}/:movieId`}
          render={props => {
            const movie_id = Number(props.match.params.reviewId);
            const review = reviews.find(({ id }) => id === movie_id);

            return review && <Cast {...props} Reviews={review.movies} />;
          }}
        />
      </>
    );
  }
}

export default Reviews;
