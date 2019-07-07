import React from 'react';
import Cloud from '../cloud/Cloud';
import Search from '../search/Search';
import Header from '../header/Header';
import CoffeeList from '../list/List'

function App() {
  return (
    <div>
      <Header/>
      <Search /> 
      <CoffeeList />
      <Cloud />
    </div>
  );
}

export default App;
