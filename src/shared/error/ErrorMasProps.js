import PropTypes from 'prop-types';

const errorMsgProps = PropTypes.objectOf(PropTypes.shape({
  message: PropTypes.string,
}));

export default errorMsgProps;
