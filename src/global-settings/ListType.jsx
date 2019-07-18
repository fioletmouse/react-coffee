import React, { Component } from 'react'
import AppContext from '../services/global-context/AppContext'

export default class ListType extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {({ listType, changeListType }) => (
          <div>
            <input type="radio" value="list" name="list" checked={listType === "list"} onChange={changeListType}/> List
            <input type="radio" value="cloud" name="cloud" checked={listType === "cloud"} onChange={changeListType} /> Cloud
          </div>
        )}
      </AppContext.Consumer>
    )
  }
}
