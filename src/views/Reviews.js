import React, { Component } from 'react';
import Axios from 'axios';
import { NavLink, Route } from 'react-router-dom';
import Cast from './Cast';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movie_id;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=4ba31ae74c8b6119033f94598087ffb2`,
    );

    this.setState({ reviews: response.data.results });
    // console.log(response.data.results);
  }

  render() {
    const { match } = this.props;
    const { reviews } = this.state;
    // console.log(reviews);

    return (
      <>
        <h1>Reviews</h1>

        {reviews.map(review => (
          <ul>
            <li>
              <h5>Author: {review.author}</h5>
              <p>{review.content} </p>
              <span>{review.created_at}</span>
            </li>
          </ul>
        ))}

        {/* <Route
          path={`${match.path}/:movieId`}
          render={props => {
            const movie_id = Number(props.match.params.reviewId);
            const review = reviews.find(({ id }) => id === movie_id);

            return review && <Cast {...props} Reviews={review.movies} />;
          }}
        /> */}
      </>
    );
  }
}

export default Reviews;
