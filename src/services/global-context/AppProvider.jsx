import React, { Component } from 'react'
import AppContext from './AppContext'

class AppProvider extends Component {
  changeListType = (event) => {
    this.setState({
      listType: event.target.value,
    });
  };

  state = {
    listType: 'list',
    changeListType: this.changeListType
  };

  render() {
    return <AppContext.Provider value={this.state}>
      {this.props.children}
    </AppContext.Provider>
  }
}


export default AppProvider;