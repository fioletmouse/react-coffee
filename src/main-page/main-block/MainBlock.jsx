import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './MainBlock.module.css';

function MainBlock({ page }) {
  return (
    <div className={style.block}>
      <Link to={`${page.path}`} className={style.block}>{page.name}</Link>
    </div>
  );
}

MainBlock.propTypes = {
  page: PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
};
export default MainBlock;
