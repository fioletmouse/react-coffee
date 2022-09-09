import PropTypes from 'prop-types';
import React from 'react';
import errorMsgProps from '../error/ErrorMasProps';
import ErrorMsg from '../error/ErrorMsg';
import Header from '../header/Header';
import Loader from '../loader/Loader';

function PageContainer({ children, loader, error }) {
  return (
    <>
      <Header />
      <div className="row">
        <ErrorMsg error={error} />
        <Loader isLoading={loader} />
        {!error && !loader && children}
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
  error: errorMsgProps,
};
PageContainer.defaultProps = {
  loader: true,
  error: null,
};

export default PageContainer;
