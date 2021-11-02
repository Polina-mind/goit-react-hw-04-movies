import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppBar.css';

const AppBar = () => {
  return (
    <header>
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
    </header>
  );
};

export default AppBar;
