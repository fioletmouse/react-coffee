import PropTypes from 'prop-types';
import React from 'react';
import Header from '../header/Header';
import Loader from '../loader/Loader';

function PageContainer({ children, loader }) {
  return (
    <>
      <Header />
      <div className="row">
        <Loader isLoading={loader} />
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
  loader: PropTypes.bool,
};
PageContainer.defaultProps = {
  loader: true,
};

export default PageContainer;
