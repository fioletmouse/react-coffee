/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React from 'react';

function RequiredInput({
  register, errors, propName, uiPropName
}) {
  return (
    <p>
      <label htmlFor={propName}>
        <b>
          {uiPropName}
          <span className="required_red"> *</span>
        </b>
      </label>
      <input {...register(`${propName}`, { required: true })} />
      {errors[propName] && (
      <p className="required_red">
        {uiPropName}
        {' '}
        is required
      </p>
      )}
    </p>
  );
}
RequiredInput.propTypes = {
  register: PropTypes.any.isRequired,
  errors: PropTypes.any.isRequired,
  propName: PropTypes.string.isRequired,
  uiPropName: PropTypes.string.isRequired,
};

export default RequiredInput;
