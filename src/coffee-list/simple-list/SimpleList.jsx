import React from 'react'
import styles from './SimpleList.module.css';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

function SimpleList (props) {
   return (
     <ul className={styles.listBody}>
       { props.list.map(item => 
        <li key={item.code}><Link to={`/${item.code}`}>{item.name}</Link></li>
       )}
     </ul>
   )
}

SimpleList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }))
}

export default SimpleList;