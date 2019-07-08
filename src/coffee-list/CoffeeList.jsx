import React from 'react';
import Cloud from './cloud/Cloud';
import Search from './search/Search';
import SimpleList from './simple-list/SimpleList'
import data from '../data';

const listType = 'list'; // TODO change to use context
function CoffeeList() {
  return (
    <div>
      <Search /> 
      {{
          'cloud': <Cloud list={data}/>,
          'list': <SimpleList list={data} />
        }[listType]
      }
    </div>
  );
}

export default CoffeeList;
