import React, { Component } from 'react';
import Cloud from './cloud/Cloud';
import Search from './search/Search';
import SimpleList from './simple-list/SimpleList'
import CoffeeActions from '../services/data-handler';
import AppContext from '../services/global-context/AppContext '

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
        <AppContext.Consumer> 
          {context => 
             (context.listType === 'cloud' && <Cloud list={this.state.coffees}/>) ||
             (context.listType === 'list' && <SimpleList list={this.state.coffees} />)
          }
         </AppContext.Consumer> 
      </div>
    );
  }  
}

export default CoffeeList;
