import React, { useEffect, useState } from 'react';
import CoffeeActions from '../services/data-handler';
import Header from '../shared/header/Header';
import Loader from '../shared/loader/Loader';
import ArticleContainer from './article/ArticleContainer';
import List from './list/List';

function CoffeeList() {
  const [recipes, setRecipes] = useState([]);
  const [loader, setLoader] = useState(true);
  const [code, setCode] = useState(null);

  const selectType = (value) => {
    setCode(value);
  };

  useEffect(() => {
    setLoader(true);
    CoffeeActions.getRecipesList()
      .then((data) => {
        setRecipes(data);
        setLoader(false);
      }).catch(() => setLoader(false));
  }, []);

  return (
    <>
      <Header />
      <div className="row">
        <Loader isLoading={loader} />
        {!loader && ((recipes && recipes.length > 0)
          ? <List list={recipes} onClick={selectType} isSelected={!!code} />
          : <div>No data found</div>)}
        { code && <ArticleContainer code={code} onClick={selectType} /> }
      </div>
    </>
  );
}

export default CoffeeList;
