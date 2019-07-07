import React from 'react';
import Cloud from './cloud/Cloud';
import Search from './search/Search';
import CoffeeList from './list/List'
import data from '../data';

function MainPage() {
  return (
    <div>
      <Search /> 
      <CoffeeList coffeeList={data} />
      <Cloud />
    </div>
  );
}

export default MainPage;
