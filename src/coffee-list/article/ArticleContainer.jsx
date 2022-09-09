import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import CoffeeActions from '../../services/data-handler';
import Loader from '../../shared/loader/Loader';
import Article from './Article';
import './Article.css';

function ArticleContainer({ code, onClick }) {
  const [articleData, setArticleData] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    setArticleData(null);
    CoffeeActions.findByCode(code).then((item) => {
      setArticleData({ name: item.name, image: item.image, info: item.info });
      setLoader(false);
    });
  }, [code]);

  return (
    <div className="col-6 article_border">
      <Loader isLoading={loader} />
      {articleData && <Article articleData={articleData} onClick={onClick} /> }
    </div>
  );
}

ArticleContainer.propTypes = {
  code: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ArticleContainer;
