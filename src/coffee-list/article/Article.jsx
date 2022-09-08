import PropTypes from 'prop-types';
import React from 'react';
import './Article.css';

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
          <button type="button" className="close_btn" onClick={() => onClick(null)}>X</button>
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
  articleData: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Article;
