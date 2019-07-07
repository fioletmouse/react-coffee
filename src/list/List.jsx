import React from 'react'
import data from '../data';

function CoffeeList () {
   return (
     <ul>
       {data.map( item => <li key={item.code}><a href={item.code}>{item.name}</a></li>)}
     </ul>
   )
}

export default CoffeeList;