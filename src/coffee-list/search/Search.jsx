import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

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
    <div className="row">
      <div className="offset-3 col-6">       
        <div class="form-group row">          
          <div class="col-sm-10">
            <label for="search" class="sr-only">Search</label>
            <input class="form-control" id="search" placeholder="Enter the name" value={inputState} onChange={prepareSearchData} />
          </div>
          <button type="submit" class="btn btn btn-dark" onClick={clearDataHandler}>
            <FontAwesomeIcon icon={faTrash} />             
          </button>
        </div>       
      </div>
    </div>
  )
}

Search.propTypes  = {
  onSearch: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired
}

export default Search;