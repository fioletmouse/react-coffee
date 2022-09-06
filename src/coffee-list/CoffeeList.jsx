import React, { useEffect, useState } from 'react';
import CoffeeActions from '../services/data-handler';
import Header from '../shared/header/Header';
import List from './list/List';

function CoffeeList() {
  const [recipes, setRecipes] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const data = CoffeeActions.getAll();
    setRecipes(data);
    setLoader(false);
  }, []);

  return (
    <>
      <Header />
      { !loader && <List list={recipes} /> }
    </>
  );
}

export default CoffeeList;
