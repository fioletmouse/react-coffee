import React, { Component } from 'react'; 
import Cloud from './cloud/Cloud';
import Search from './search/Search';
import SimpleList from './simple-list/SimpleList'
import CoffeeActions from '../services/data-handler';
import { createStore } from 'redux'
import {  Provider } from 'react-redux'
import searchReducer from '../store/reducers'    

const listType = 'list'; // TODO change to use context \ redux to separate branches

const store = createStore(searchReducer);


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
      <>
        <Provider store={store}>
          <Search onSearch={this.searchData} onRefresh={this.refresh} /> 
        </Provider>
        
        {{
            'cloud': <Cloud list={this.state.coffees}/>,
            'list': <SimpleList list={this.state.coffees} />
          }[listType]
        }
      </>
    );
  }  
}

export default CoffeeList;
