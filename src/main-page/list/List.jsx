import React from 'react'

function CoffeeList (props) {
   return (
     <ul>
       {props.coffeeList.map( item => <li key={item.code}><a href={item.code}>{item.name}</a></li>)}
     </ul>
   )
}

export default CoffeeList;