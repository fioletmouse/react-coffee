import React, { Component } from 'react'
import AppContext from './AppContext'

class AppProvider extends Component {
  changeListType = (event) => {
    this.setState({
      listType: event.target.value,
    });
  };

  changeColor = (color) => {
    this.setState({
      selectedColor: color.hex
    });
  };

  state = {
    listType: 'list',
    changeListType: this.changeListType,
    selectedColor: '#795548',
    changeColor: this.changeColor
  };

  render() {
    return <AppContext.Provider value={this.state}>
      {this.props.children}
    </AppContext.Provider>
  }
}


export default AppProvider;