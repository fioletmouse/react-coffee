import PropTypes from 'prop-types';
import React from 'react';
import { X } from 'react-feather';
import './Article.css';
import articleProps from './articleProps';

function Article({ articleData, onClick }) {
  return (
    <>
      <div className="row">
        <div className="col-10">
          <h3 className="text-center">
            {articleData.name}
          </h3>
        </div>
        <div className="col-2 text-right">
          <button type="button" className="custom_btn" onClick={() => onClick(null)}>
            <X color="white" size="15" />
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <img src={`../static/${articleData.image}`} alt="CoffeeImage" className="floating" />
          <p className="text-justify">{articleData.info}</p>
        </div>
      </div>
    </>
  );
}

Article.propTypes = {
  articleData: PropTypes.objectOf(articleProps).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Article;
