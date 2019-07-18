import React, { Component } from 'react'
import { CirclePicker } from 'react-color'
import AppContext from '../services/global-context/AppContext'

export default class ColorPicker extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {({selectedColor, changeColor}) => (
          <CirclePicker onChange={ changeColor } color={selectedColor} colors={["#795548", "#607d8b"]}/>
        )}
      </AppContext.Consumer>
    )
  }
}

