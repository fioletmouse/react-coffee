import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Check } from 'react-feather';
import './Input.css';

function Input({ initialValue, changeHandler, hideBlock }) {
  const [inputText, setInputText] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (changeHandler) {
      changeHandler(inputText);
    }
    if (hideBlock) {
      hideBlock(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setInputText(e.target.value)} value={inputText} />
      <button className="custom_btn" type="button" data-test="button_submit" onClick={(e) => handleSubmit(e)}>
        <Check color="white" size="15" />
      </button>
    </form>
  );
}

Input.propTypes = {
  initialValue: PropTypes.string,
  changeHandler: PropTypes.func,
  hideBlock: PropTypes.func,
};
Input.defaultProps = {
  changeHandler: null,
  hideBlock: null,
  initialValue: '',
};

export default Input;
