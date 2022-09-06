import React, { Component } from 'react';
import CoffeeActions from '../services/data-handler';
import Cloud from './cloud/Cloud';
import Search from './search/Search';
import SimpleList from './simple-list/SimpleList';

const listType = 'list'; // TODO change to use context \ redux to separate branches

class CoffeeList extends Component {
  state = {
    coffees: CoffeeActions.getAll(),
  };

  searchData = (_value) => {
    const data = CoffeeActions.findByName(_value);
    this.setState({
      coffees: data,
    });
  };

  refresh = () => {
    this.setState({
      coffees: CoffeeActions.getAll(),
    });
  };

  render() {
    return (
      <>
        <Search onSearch={this.searchData} onRefresh={this.refresh} />
        {{
          cloud: <Cloud list={this.state.coffees} />,
          list: <SimpleList list={this.state.coffees} />,
        }[listType]}
      </>
    );
  }
}

export default CoffeeList;
