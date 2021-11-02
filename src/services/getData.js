import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const key = '8d4e0a5a0c37d4780eefdf617d0feea1';

// Фетч трендов
const fetchTrendMovies = async () => {
  try {
    const response = await axios.get(`trending/movie/day?api_key=${key}`);
    const trendMovies = response.data.results;

    return trendMovies;
  } catch (error) {
    console.error('Smth wrong with fetch trends in api', error);
  }
};

// Фетч по поиску
const fetchMoviesBySearch = async query => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`,
    );
    const moviesBySearch = response.data.results;

    return moviesBySearch;
  } catch (error) {
    console.error('Smth wrong with fetch movie search in api', error);
  }
};

// Фетч фильма по id
const fetchMovieById = async id => {
  try {
    const response = await axios.get(
      `/movie/${id}?api_key=${key}&language=en-US`,
    );
    const movieById = response.data;

    return movieById;
  } catch (error) {
    console.error('Smth wrong with fetch movie id in api', error);
  }
};

// Фетч актёров для фильма
const fetchCast = async id => {
  try {
    const response = await axios.get(
      `/movie/${id}/credits?api_key=${key}&language=en-US`,
    );
    const cast = response.data.cast;

    return cast;
  } catch (error) {
    console.error('Smth wrong with fetch cast in api', error);
  }
};

// Фетч отзывов на фильм
const fetchReviews = async id => {
  try {
    const response = await axios.get(
      `/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`,
    );
    const reviews = response.data.results;

    return reviews;
  } catch (error) {
    console.error('Smth wrong with fetch reviews in api', error);
  }
};

export {
  fetchTrendMovies,
  fetchMoviesBySearch,
  fetchMovieById,
  fetchCast,
  fetchReviews,
};
