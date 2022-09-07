import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import CoffeeActions from '../../services/data-handler';
import ArticleHeader from './ArticleHeader';

function Article({ code, onClick }) {
  const [articleData, setArticleData] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    CoffeeActions.findByCode(code).then((item) => {
      setArticleData({ name: item.name, imge: item.image, info: item.info });
      setLoader(false);
    });
  }, [code]);

  if (!code) return null;
  if (loader) return <div>Loading...</div>;
  return (
    <div className="col-8" style={{ borderLeft: 'solid 1px black' }}>
      <div className="row">
        <button type="button" onClick={() => onClick(null)}>Close</button>
        <ArticleHeader name={articleData.name} />
        <div className="col-5">
          <img src={`../static/${articleData.image}`} alt="CoffeeImage" />
        </div>
        <div className="col-7">
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
