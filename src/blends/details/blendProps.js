import PropTypes from 'prop-types';

const blendProps = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  processing: PropTypes.oneOf(['мытая', 'сухая']),
  brew: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  area: PropTypes.string,
  minAltitude: PropTypes.number,
  maxAltitude: PropTypes.number,
  description: PropTypes.string,
  taste: PropTypes.objectOf({
    acid: PropTypes.number.isRequired,
    sweet: PropTypes.number.isRequired,
    intensity: PropTypes.number.isRequired,
  }),
  roastDate: PropTypes.string,
  harvestDate: PropTypes.string,
  dryingMethod: PropTypes.string
};

export default blendProps;