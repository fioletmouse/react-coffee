import PropTypes from 'prop-types';
import React from 'react';
import errorMsgProps from '../error/ErrorMasProps';
import ErrorMsg from '../error/ErrorMsg';
import Header from '../header/Header';
import Loader from '../loader/Loader';

function BlockContainer({
  children, loader, error, showHeader,
}) {
  return (
    <>
      { showHeader && <Header /> }
      <div className="row">
        <ErrorMsg error={error} />
        <Loader isLoading={loader} />
        {!error && !loader && children}
      </div>
    </>
  );
}

BlockContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  loader: PropTypes.bool,
  error: errorMsgProps,
  showHeader: PropTypes.bool,
};
BlockContainer.defaultProps = {
  loader: true,
  error: null,
  showHeader: true,
};

export default BlockContainer;
