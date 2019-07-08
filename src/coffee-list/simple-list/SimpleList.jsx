import React from 'react'
import styles from './SimpleList.module.css';
import { Link } from 'react-router-dom'


function SimpleList (props) {
   return (
     <ul className={styles.listBody}>
       { props.list.map(item => 
        <li key={item.code}><Link to={`/${item.code}`}>{item.name}</Link></li>
       )}
     </ul>
   )
}

export default SimpleList;