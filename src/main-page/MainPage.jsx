import PropTypes from 'prop-types';
import React from 'react';
import MainBlock from './main-block/MainBlock';

function MainPage({ pages }) {
  // document.documentElement.style.setProperty('--main-color', 'red');
  // document.documentElement.style.setProperty('--second-color', 'black');
  // document.documentElement.style.setProperty('--hover-color', 'green');
  return (
    <div className="row">
      <div className="w-100 p-3" />
      {
        pages.map((page) => (
          <div className="col-4">
            <MainBlock page={page} />
          </div>
        ))
      }
    </div>
  );
}

MainPage.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })).isRequired,
};

export default MainPage;
