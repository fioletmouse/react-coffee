import React from 'react';
import Cloud from './cloud/Cloud';
import Search from './search/Search';
import SimpleList from './simple-list/SimpleList'
import data from '../data';

//const listType = 'cloud';
function CoffeeList() {
  return (
    <div>
      <Search /> 
      <SimpleList list={data} />
      <Cloud list={data}/>
    </div>
  );
}

export default CoffeeList;
