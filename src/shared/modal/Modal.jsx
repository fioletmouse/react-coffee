import PropTypes from 'prop-types';
import React from 'react';
import './Modal.css';

function Modal({ title, onClose, children }) {
  return (
    <div
      className="modal fade bd-example-modal-xl show force_show"
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="close" aria-label="Close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            { children }
          </div>
        </div>
      </div>
    </div>
  );
}
Modal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Modal.defaultProps = {
  title: ''
};
export default Modal;
