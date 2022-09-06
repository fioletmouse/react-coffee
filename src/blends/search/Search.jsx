import PropTypes from 'prop-types';
import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Search(props) {
  const [inputState, changeInputState] = useState('');

  const prepareSearchData = (event) => {
    const _value = event.target.value;
    props.onSearch(_value);
    changeInputState(_value);
  };

  const clearDataHandler = () => {
    changeInputState('');
    props.onRefresh();
  };

  return (

    <div className="row">
      <div className="offset-3 col-6">
        <div className="form-group row">
          <div className="col-sm-10">
            <label htmlFor="search" className="sr-only">Search</label>
            <input
              className="form-control"
              id="search"
              placeholder="Enter the name"
              value={inputState}
              onChange={prepareSearchData}
            />
          </div>
          <button type="submit" className="btn btn btn-dark" onClick={clearDataHandler}>
            {/* <FontAwesomeIcon icon={faTrash} />              */}
          </button>
        </div>
      </div>
    </div>
  );
}
/*

  // searchData = (_value) => {
  //   const data = CoffeeActions.findByName(_value);
  //   this.setState({
  //     coffees: data,
  //   });
  // };

  // refresh = () => {
  //   this.setState({
  //     coffees: CoffeeActions.getAll(),
  //   });
  // };
<Search onSearch={this.searchData} onRefresh={this.refresh} /> */
Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired,
};

export default Search;
