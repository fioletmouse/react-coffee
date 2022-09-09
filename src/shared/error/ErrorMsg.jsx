import React from 'react';
import errorMsgProps from './ErrorMasProps';

function ErrorMsg({ error }) {
  return (
    error && <div>{error.message}</div>
  );
}

ErrorMsg.propTypes = {
  error: errorMsgProps,
};

ErrorMsg.defaultProps = {
  error: null,
};

export default ErrorMsg;
