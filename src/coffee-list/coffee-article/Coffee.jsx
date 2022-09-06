import React from 'react';
import CoffeeActions from '../../services/data-handler';
import CoffeeHeader from './CoffeeHeader';

function Atricle() {
  const code = this.props.match.params.name;
  const { name, image, info } = CoffeeActions.findByCode(code);

  return (
    <>
      <CoffeeHeader name={name} />
      <div className="row">
        <div className="col-5">
          <img src={require(`../static/${image}`)} alt="CoffeeImage" />
        </div>
        <div className="col-7">
          <p className="text-justify">{info}</p>
        </div>
      </div>
    </>
  );
}
export default Atricle;
