import React, { Component } from 'react';
import { fetchReviews } from '../../services/getData';
import './Reviews.css';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;

    fetchReviews(movieId).then(reviews => this.setState({ reviews: reviews }));
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        <h1 className="Title">Reviews</h1>
        {reviews.length > 0 && (
          <ul>
            {reviews.map(review => (
              <li key={review.created_at}>
                <h5>Author: {review.author}</h5>
                <p>{review.content} </p>
                <span>{review.created_at}</span>
              </li>
            ))}
          </ul>
        )}
        {reviews.length === 0 && <p className="Text">There are no reviews</p>}
      </>
    );
  }
}

export default Reviews;
