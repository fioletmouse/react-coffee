import React, { Component } from 'react'
import { CirclePicker } from 'react-color'

export default class ColorPicker extends Component {
  handleChange(color, event) {
    console.log(color, event);
    // color = {
    //   hex: '#333',
    //   rgb: {
    //     r: 51,
    //     g: 51,
    //     b: 51,
    //     a: 1,
    //   },
    //   hsl: {
    //     h: 0,
    //     s: 0,
    //     l: .20,
    //     a: 1,
    //   },
    // }
  }

  render() {
    return (
      <div>
        <CirclePicker onChange={ this.handleChange } colors={["#795548", "#607d8b"]}/>
      </div>
    )
  }
}

