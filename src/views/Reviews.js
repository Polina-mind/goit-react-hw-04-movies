import React, { Component } from 'react';
import Axios from 'axios';

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
    const { reviews } = this.state;
    // console.log(reviews);

    return (
      <>
        <h1 className="Title">Reviews</h1>

        {reviews.map(review => (
          <ul>
            <li>
              <h5>Author: {review.author}</h5>
              <p>{review.content} </p>
              <span>{review.created_at}</span>
            </li>
          </ul>
        ))}
      </>
    );
  }
}

export default Reviews;
