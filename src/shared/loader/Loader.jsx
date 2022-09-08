import PropTypes from 'prop-types';
import React from 'react';
import './Loader.css';

function Loader({ isLoading }) {
  return (
    isLoading && (
    <div className="offset-4 col-4 text-center">
      <span className="loader" />
    </div>
    )
  );
}
Loader.propTypes = {
  isLoading: PropTypes.bool,
};
Loader.defaultProps = {
  isLoading: true,
};
export default Loader;
