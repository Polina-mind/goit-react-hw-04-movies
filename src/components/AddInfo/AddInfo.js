import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './AddInfo.css';

const AddInfo = ({ title, isOpenCast, isOpenReviews, url }) => {
  return (
    <>
      <h4 className="TitleName">{title}</h4>

      <ul className="AddInfo">
        <li key="Cast" onClick={isOpenCast}>
          <Link
            to={{
              pathname: `${url}/cast`,
            }}
          >
            Cast
          </Link>
        </li>

        <li key="Reviews" onClick={isOpenReviews}>
          <Link
            to={{
              pathname: `${url}/reviews`,
            }}
          >
            Reviews
          </Link>
        </li>
      </ul>
    </>
  );
};

AddInfo.defaultProps = {
  location: null,
};

AddInfo.propTypes = {
  title: PropTypes.string.isRequired,
  isOpenCast: PropTypes.func.isRequired,
  isOpenReviews: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};

export default AddInfo;
