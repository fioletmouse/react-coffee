import React from 'react';
import { Link } from 'react-router-dom';
import style from './MainBlock.module.css';

function MainBlock(props) {
  return (
    <div className={style.block}>
      <Link to={`${props.addr}`} className={style.block}>{props.addr}</Link>
    </div>

  );
}

export default MainBlock;
