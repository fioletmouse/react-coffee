import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import CoffeeActions from '../../services/data-handler';
import './Article.css';

function Article({ code, onClick }) {
  const [articleData, setArticleData] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    CoffeeActions.findByCode(code).then((item) => {
      setArticleData({ name: item.name, image: item.image, info: item.info });
      setLoader(false);
    });
  }, [code]);

  if (loader) return <div>Loading...</div>;
  if (!code) return null;

  return (
    <div className="col-6 article_border">
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
    </div>
  );
}

Article.propTypes = {
  code: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Article;
