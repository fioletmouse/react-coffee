import React, { useEffect, useState } from 'react';
import CoffeeActions from '../services/data-handler';
import Header from '../shared/header/Header';
import List from './list/List';

function CoffeeList() {
  const [recipes, setRecipes] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    CoffeeActions.getRecipesList()
      .then((data) => {
        setRecipes(data);
        setLoader(false);
      }).catch(() => setLoader(false));
  }, []);

  return (
    <>
      <Header />
      {loader && <div> Loading...</div>}
      {!loader && ((recipes && recipes.length > 0)
        ? <List list={recipes} />
        : <div>No data found</div>)}
    </>
  );
}

export default CoffeeList;
