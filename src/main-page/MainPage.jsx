import PropTypes from 'prop-types';
import React from 'react';
import MainBlock from './main-block/MainBlock';

function MainPage({ pages }) {
  return (
    <div className="row">
      {
        pages.map((page, index) => (
          <>
            { (index % 2) === 0 && <div className="w-100 p-3" /> }
            <div className={(index % 2) === 0 ? 'offset-1 col-5 text-right' : 'col-5 text-left'}>
              <MainBlock page={page} />
            </div>
          </>
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
