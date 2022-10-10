import React from 'react';
import errorMsgProps from './ErrorMasProps';

function ErrorMsg({ error }) {
  return (
    error && <div className="text-center" style={{ color: 'red', fontWeight: 'bold' }}>{error.message}</div>
  );
}

ErrorMsg.propTypes = {
  error: errorMsgProps,
};

ErrorMsg.defaultProps = {
  error: null,
};

export default ErrorMsg;
