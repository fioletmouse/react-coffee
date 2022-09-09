import PropTypes from 'prop-types';
import React from 'react';
import Loader from '../../shared/loader/Loader';
import Article from './Article';
import './Article.css';
import articleProps from './articleProps';

function ArticleContainer({ articleLoader, articleData, onClick }) {
  return (
    <div className="col-6 article_border">
      <Loader isLoading={articleLoader} />
      {articleData && <Article articleData={articleData} onClick={onClick} /> }
    </div>
  );
}

ArticleContainer.propTypes = {
  articleLoader: PropTypes.bool.isRequired,
  articleData: PropTypes.objectOf(articleProps).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ArticleContainer;
