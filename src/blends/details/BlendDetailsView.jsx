import PropTypes from 'prop-types';
import React from 'react';
import blendProps from './blendProps';

function BlendDetailsView({ blendData }) {
  return (
    <div className="card card-body">
      <div className="row">
        <div className="col-3">
          <p>
            <span><b>Name </b></span>
            <span>{blendData.name}</span>
          </p>
          <p>
            <span><b>Country </b></span>
            <span>{blendData.country}</span>
          </p>
          <p>
            <span><b>Region </b></span>
            <span>{blendData.region || '-'}</span>
          </p>
          <p>
            <span><b>Area </b></span>
            <span>{blendData.area || '-'}</span>
          </p>
          <p>
            <span><b>Type </b></span>
            <span>{blendData.type || '-'}</span>
          </p>
        </div>
        <div className="col-5">
          <p>
            <span><b>Taste </b></span>
            <span><b>Acid </b></span>
            <span>{blendData.taste?.acid || '-'}</span>
            <span><b> Sweet </b></span>
            <span>{blendData.taste?.sweet || '-'}</span>
            <span><b> Intensity </b></span>
            <span>{blendData.taste?.intensity || '-'}</span>
          </p>
          <p>
            <span><b>Brew </b></span>
            <span>{blendData.brew || '-'}</span>
          </p>
          <p>
            <span><b>Processing </b></span>
            <span>{blendData.processing || '-'}</span>
            <span><b> Drying </b></span>
            <span>{blendData.dryingMethod || '-'}</span>
          </p>
          <p>
            <span><b>Altitude Min: </b></span>
            <span>{blendData.minAltitude || '-'}</span>
            <span><b> Max: </b></span>
            <span>{blendData.maxAltitude || '-'}</span>
          </p>
          <p>
            <span><b>Date Harvest: </b></span>
            <span>{blendData.harvestDate || '-'}</span>
            <span><b> Roast: </b></span>
            <span>{blendData.roastDate || '-'}</span>
          </p>
        </div>
        <div className="col-4">
          <p>
            <span><b>Description</b></span>
          </p>
          <span>{blendData.description}</span>
        </div>
      </div>
    </div>

  );
}

BlendDetailsView.propTypes = {
  blendData: PropTypes.objectOf(blendProps).isRequired,
};
export default BlendDetailsView;
