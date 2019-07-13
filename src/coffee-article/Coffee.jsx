import React, { Component } from 'react'
import CoffeeActions from '../services/data-handler';

export default class Coffee extends Component {

  render() {
    const code = this.props.match.params.name;
    const { name, image, info } = CoffeeActions.findByCode(code);
    
    return (
      <div className='container'>
        <div className="row">
          <div className="offset-sm-1 col-10">
            <h2>{name}</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <img src={require(`../static/${image}`)} alt="Coffee" />
          </div>
          <div className="col-8">
            <p>{info}</p>
          </div>
        </div>
      </div>
    )
  }
}
