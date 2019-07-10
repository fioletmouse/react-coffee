import React from 'react'
import './Search.module.css'; 

function Search (props) {
 return (
   <div>
     <input className="w-25 text-center" placeholder='Enter the name' onChange={props.onSearch}></input>
   </div>
 )
}
export default Search;