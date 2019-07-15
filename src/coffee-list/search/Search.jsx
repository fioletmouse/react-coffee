import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Search.module.css'; 

function Search (props) {
  const [inputState, changeInputState] = useState('');

  const prepareSearchData = (event) => {
    const _value = event.target.value;
    props.onSearch(_value);
    changeInputState(_value);
  }
  
  const clearDataHandler = () => {
    changeInputState('');
    props.onRefresh();
  }

  return (
    <div>
      <input className="w-25 text-center" placeholder='Enter the name' value={inputState} onChange={prepareSearchData}></input>
      <button className="btn btn-primary" id="clearData"  onClick={clearDataHandler}>Clean</button>
    </div>
  )
}

Search.propTypes  = {
  onSearch: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired
}

export default Search;