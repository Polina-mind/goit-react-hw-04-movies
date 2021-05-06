import { lazy, Suspense } from 'react';
import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
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
    <ul className="NavLinks">
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Movies
        </NavLink>
      </li>
    </ul>

    <Suspense fallback={<h1>ЗАГРУЖАЕМ МАРШРУТ...</h1>}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:movie_id" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
        {/* <Route path="/movies/:movie_id/cast" component={Cast} />
        <Route path="/movies/:movie_id/reviews" component={Reviews} /> */}
        <Route path="//" component={NotFoundView} />
      </Switch>
    </Suspense>
  </>
);

export default App;
