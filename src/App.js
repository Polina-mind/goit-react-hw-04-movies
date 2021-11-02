import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
// import HomePage from './views/HomePage';
// import MoviesPage from './views/MoviesPage';
// import MovieDetailsPage from './views/MovieDetailsPage';
// import NotFoundView from './views/NotFoundView';
import './App.css';

const HomePage = lazy(() =>
  import('./views/HomePage.js' /* webpackChunkName: "HomePage" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage.js' /* webpackChunkName: "MoviesPage" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage.js' /* webpackChunkName: "MovieDetailsPage" */
  ),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView.js' /* webpackChunkName: "NotFoundView" */),
);

const App = () => (
  <>
    <AppBar />

    <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route component={NotFoundView} />
      </Switch>
    </Suspense>
  </>
);

export default App;
