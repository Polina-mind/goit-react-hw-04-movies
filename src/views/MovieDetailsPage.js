import React, { Component, Suspense } from 'react';
import { Route } from 'react-router-dom';
import Axios from 'axios';
import MovieDetails from '../components/MovieDetails';
import AddInfo from '../components/AddInfo';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

class MovieDetailsPage extends Component {
  state = {
    id: null,
    title: '',
    poster_path: '',
    overview: '',
    genres: [],
    release_date: '',
    popularity: 0,
    isOpenCast: false,
    isOpenReviews: false,
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;

    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=4ba31ae74c8b6119033f94598087ffb2`,
    );

    this.setState({ ...response.data });
    this.changeYear();
  }

  changeYear = () => {
    const year = this.state.release_date.slice(0, 4);
    this.setState({ release_date: year });

    const fixedPopularity = Math.round(this.state.popularity);
    this.setState({ popularity: fixedPopularity });
  };

  isOpen = keyName => {
    this.setState({ [keyName]: !this.state[keyName] });

    this.setState(prevState => {
      if (keyName === 'isOpenCast' && prevState.isOpenReviews) {
        return {
          isOpenReviews: !prevState.isOpenReviews,
        };
      } else if (keyName === 'isOpenReviews' && prevState.isOpenCast) {
        return {
          isOpenCast: !prevState.isOpenCast,
        };
      }
    });
  };

  onGoBack = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || '/');
    history.location.state = { query: location?.state?.query || '' };
    // console.log(history.location);
  };

  render() {
    const { match } = this.props;
    const {
      title,
      poster_path,
      overview,
      genres,
      release_date,
      popularity,
      isOpenCast,
      isOpenReviews,
    } = this.state;

    return (
      <>
        <button type="button" className="GoBackButton" onClick={this.onGoBack}>
          Go Back
        </button>

        <MovieDetails
          title={title}
          poster_path={poster_path}
          overview={overview}
          genres={genres}
          release_date={release_date}
          popularity={popularity}
        />

        <AddInfo
          title="Additional information"
          isOpenCast={() => this.isOpen('isOpenCast')}
          isOpenReviews={() => this.isOpen('isOpenReviews')}
          url={match.url}
        ></AddInfo>

        <Suspense fallback={<p>Loading...</p>}>
          <Route path={`${match.path}/cast`} component={isOpenCast && Cast} />
          <Route
            path={`${match.path}/reviews`}
            component={isOpenReviews && Reviews}
          />
        </Suspense>
      </>
    );
  }
}

export default MovieDetailsPage;
