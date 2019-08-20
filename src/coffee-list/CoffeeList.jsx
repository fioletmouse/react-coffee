import React, { Component } from 'react'; 
import Cloud from './cloud/Cloud';
import Search from './search/Search';
import SimpleList from './simple-list/SimpleList'
import CoffeeActions from '../services/data-handler';
import { createStore } from 'redux'
import {  Provider } from 'react-redux'
import searchReducer from '../store/reducers'    
//import watch from 'redux-watch'

const listType = 'list'; // TODO change to use context \ redux to separate branches

const store = createStore(searchReducer);
//let w = watch(store.getState, 'search')

class CoffeeList extends Component {
  state = {
    coffees: CoffeeActions.getAll()
  };

  searchData = () => {
    const _value = store.getState().search;
    const data = CoffeeActions.findByName(_value);
    this.setState({
      coffees: data
    })
  };
  // dont work now
  refresh = () => {
    this.setState({
      coffees:  CoffeeActions.getAll()
    });
  }
  // store.
  //.subscribe(w((newVal, oldVal, objectPath) => {
  //   console.log('%s changed from %s to %s', objectPath, oldVal, newVal)
  //   // admin.name changed from JP to JOE
  //   CoffeeList.searchData();
  // }))
  
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
