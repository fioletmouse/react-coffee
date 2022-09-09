import PropTypes from 'prop-types';
import React from 'react';
import './List.css';

function List({ list, onClick, isSelected }) {
  if (!list || list.length === 0) return <div>No data found</div>;

  return (
    <div className={`${isSelected ? 'col-4 margin_with_article' : 'col-12'}`}>
      <div className="row gap_class">
        { list.map((item) => (
          <div key={item.code} className="block">
            <button type="button" onClick={() => { onClick(item.code); }}>{item.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};
List.defaultProps = {
  isSelected: false,
};

export default List;
