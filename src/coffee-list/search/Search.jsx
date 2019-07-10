import React from 'react';
import PropTypes from 'prop-types';
import './Search.module.css'; 

function Search (props) {
 return (
   <div>
     <input className="w-25 text-center" placeholder='Enter the name' onChange={props.onSearch}></input>
     <button className="btn btn-primary" onClick={props.onRefresh}>Clean</button>
   </div>
 )
}

Search.propTypes  = {
  onSearch: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired
}

export default Search;