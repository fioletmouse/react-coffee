import PropTypes from 'prop-types';
import React from 'react';
import Header from '../header/Header';

function PageContainer({ children }) {
  return (
    <>
      <Header />
      <div className="row">
        {children}
      </div>
    </>
  );
}

PageContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PageContainer;
