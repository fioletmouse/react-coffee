import React, { Component } from 'react'


export default class Coffee extends Component {

  render() {
    const name = this.props.match.params.name;

    return (
      <div>
        Not implemented yet. Page for: {name}
      </div>
    )
  }
}
