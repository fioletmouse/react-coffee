import PropTypes from 'prop-types';
import React from 'react';
import errorMsgProps from '../error/ErrorMasProps';
import ErrorMsg from '../error/ErrorMsg';
import Loader from '../loader/Loader';

function BlockContainer({
  children, loader, error, inheritedClass, softError
}) {
  return (
    <div className={inheritedClass}>
      <ErrorMsg error={error} />
      <Loader isLoading={loader} />
      {(!error || softError) && !loader && children}
    </div>
  );
}

BlockContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  loader: PropTypes.bool,
  error: errorMsgProps,
  inheritedClass: PropTypes.string,
  softError: PropTypes.bool,
};
BlockContainer.defaultProps = {
  loader: true,
  error: null,
  inheritedClass: 'col-12',
  softError: false
};

export default BlockContainer;
