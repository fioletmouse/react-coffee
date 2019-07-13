import React, { Component } from 'react';
import Cloud from './cloud/Cloud';
import Search from './search/Search';
import SimpleList from './simple-list/SimpleList'
import CoffeeActions from '../services/data-handler';

const listType = 'list'; // TODO change to use context

class CoffeeList extends Component {
  state = {
    coffees: CoffeeActions.getAll()
  }

  searchData = (_value) => {
    const data = CoffeeActions.findByName(_value);
    this.setState({
      coffees: data
    })
  };

  refresh = () => {
    this.setState({
      coffees:  CoffeeActions.getAll()
    });
  }

  render() {
    return (
      <div>
        <Search onSearch={this.searchData} onRefresh={this.refresh} /> 
        {{
            'cloud': <Cloud list={this.state.coffees}/>,
            'list': <SimpleList list={this.state.coffees} />
          }[listType]
        }
      </div>
    );
  }  
}

export default CoffeeList;
