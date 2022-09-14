import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Check } from 'react-feather';
import './Input.css';

function Input({ submitHandler, hideBlock }) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitHandler) {
      submitHandler(inputText);
    }
    if (hideBlock) {
      hideBlock(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setInputText(e.target.value)} value={inputText} />
      <button className="custom_btn" type="button" onClick={(e) => handleSubmit(e)}>
        <Check color="white" size="15" />
      </button>
    </form>
  );
}

Input.propTypes = {
  submitHandler: PropTypes.func,
  hideBlock: PropTypes.func,
};
Input.defaultProps = {
  submitHandler: null,
  hideBlock: null,
};

export default Input;
