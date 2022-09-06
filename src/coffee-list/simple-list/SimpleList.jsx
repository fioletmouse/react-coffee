import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SimpleList.module.css';

function SimpleList(props) {
  return (
    <div className="row">
      <div className="offset-3 col-6">
        <ul className={styles.listBody}>
          { props.list.map((item) => <li key={item.code}><Link to={`/${item.code}`}>{item.name}</Link></li>)}
        </ul>
      </div>
    </div>

  );
}

SimpleList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default SimpleList;
