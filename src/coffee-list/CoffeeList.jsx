import React, { useEffect, useState } from 'react';
import CoffeeActions from '../services/data-handler';
import PageContainer from '../shared/pageContainer/PageContainer';
import ArticleContainer from './article/ArticleContainer';
import List from './list/List';

function CoffeeList() {
  const [recipes, setRecipes] = useState([]);
  const [recipesLoader, setRecipesLoader] = useState(true);
  const [articleData, setArticleData] = useState(null);
  const [articleLoader, setArticleLoader] = useState(true);
  const [code, setCode] = useState(null);

  const selectType = (value) => {
    setCode(value);
  };

  useEffect(() => {
    setRecipesLoader(true);
    CoffeeActions.getRecipesList()
      .then((data) => {
        setRecipes(data);
        setRecipesLoader(false);
      }).catch((err) => { console.log(err); setRecipesLoader(false); });
  }, []);

  useEffect(() => {
    setArticleLoader(true);
    setArticleData(null);
    CoffeeActions.findByCode(code).then((item) => {
      setArticleData({ name: item.name, image: item.image, info: item.info });
      setArticleLoader(false);
    }).catch(() => setArticleLoader(false));
  }, [code]);

  return (
    <PageContainer loader={recipesLoader}>
      {!recipesLoader && <List list={recipes} onClick={selectType} isSelected={!!code} /> }
      { code && (
      <ArticleContainer
        articleLoader={articleLoader}
        articleData={articleData}
        onClick={selectType}
      />
      ) }
    </PageContainer>
  );
}

export default CoffeeList;
