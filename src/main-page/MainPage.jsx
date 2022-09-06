import React from 'react';
import MainBlock from './main-block/MainBlock';

function MainPage(props) {
  return (
    <div className="row">
      <div className="w-100 p-3" />
      <div className="offset-1 col-5 text-right">
        <MainBlock addr={props.pages[0]} />
      </div>
      <div className="col-5 text-left">
        <MainBlock addr={props.pages[1]} />
      </div>
      <div className="w-100 p-3" />
      <div className="offset-1 col-5 text-right">
        <MainBlock addr={props.pages[2]} />
      </div>
      <div className="col-5 text-left">
        <MainBlock addr={props.pages[3]} />
      </div>
    </div>
  );
}

export default MainPage;
