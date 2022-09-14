import PropTypes from 'prop-types';
import React, { useState } from 'react';
import * as Icons from 'react-feather';
import Input from '../input/Input';
import './ActionInput.css';

function ActionInput({ actionHandler, initialObject, actionComponent }) {
  const [addInputHidden, setAddInputHidden] = useState(true);
  const submitHandler = (inputText) => {
    if (initialObject.id) {
      actionHandler(initialObject.id, inputText);
    } else {
      actionHandler(inputText);
    }
  };
  return (
    <>
      <button type="button" onClick={() => setAddInputHidden((prev) => !prev)} className="custom_btn">
        { addInputHidden && actionComponent }
        { !addInputHidden && <Icons.X color="white" size="15" /> }
      </button>
      { addInputHidden && initialObject.name && <span className="span-margin">{initialObject.name}</span> }
      { !addInputHidden && (
      <Input
        changeHandler={submitHandler}
        hideBlock={setAddInputHidden}
        initialValue={initialObject.name}
      />
      ) }

    </>
  );
}

ActionInput.propTypes = {
  actionHandler: PropTypes.func,
  initialObject: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  actionComponent: PropTypes.element,
};
ActionInput.defaultProps = {
  actionHandler: null,
  initialObject: {
    id: null,
    name: '',
  },
  actionComponent: <Icons.Plus color="white" size="15" />,
};
export default ActionInput;
