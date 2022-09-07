import PropTypes from 'prop-types';
import React from 'react';
import styles from './List.module.css';

function List({ list, onClick }) {
  return (
    <div className="offset-1 col-2">
      <ul className={styles.listBody}>
        { list.map((item) => (
          <li key={item.code}>
            <button type="button" onClick={() => { onClick(item.code); }}>{item.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default List;
