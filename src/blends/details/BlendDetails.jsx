import PropTypes from 'prop-types';
import React from 'react';
import blendProps from './blendProps';

function BlendDetails({ blendData }) {
  return (
    blendData
    && (
    <div className="card card-body">
      {JSON.stringify(blendData)}
    </div>
    )

  );
}

BlendDetails.propTypes = {
  blendData: PropTypes.objectOf(blendProps).isRequired,
};
export default BlendDetails;
