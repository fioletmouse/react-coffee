import React, { Component } from 'react'
import AppContext from './AppContext '

class AppProvider extends Component {
  render() {
    return <AppContext.Provider value={{listType: 'cloud'}}>
      {this.props.children}
    </AppContext.Provider>
  }
}


export default AppProvider;