import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import DictActions from '../services/dict-handler';
import BlockContainer from '../shared/blockContainer/BlockContainer';
import './Dict.css';

function DictComponent({ dictParams, appliedClass }) {
  const [dictLoader, setDictLoader] = useState(true);
  const [dictData, setDictData] = useState(null);
  const [dictError, setDictError] = useState(null);
  // temp solution, when work with a server - passing url will be enought
  const dictInstance = useMemo(() => DictActions(dictParams.path), [dictParams.path]);

  const getDictData = () => {
    setDictError(null);
    setDictLoader(true);
    dictInstance.getDictData()
      .then((data) => {
        setDictData(data);
        setDictLoader(false);
      }).catch((err) => { setDictError(err); setDictLoader(false); });
  };

  useEffect(() => {
    getDictData();
  }, []);

  const addDictData = () => {
    dictInstance.addDictData(`value${Math.random()}`)
      .then((data) => {
        setDictData(data);
        getDictData();
      }).catch((err) => { setDictError(err); });
  };
  const updateDictData = (id) => {
    dictInstance.updateDictData(id)
      .then((data) => {
        setDictData(data);
        getDictData();
      }).catch((err) => { setDictError(err); });
  };
  const deleteDictData = (id) => {
    dictInstance.deleteDictData(id)
      .then((data) => {
        setDictData(data);
        getDictData();
      }).catch((err) => { setDictError(err); });
  };

  return (
    <BlockContainer loader={dictLoader} error={dictError} inheritedClass={`col-6 ${appliedClass}`}>
      <h4>{dictParams.name}</h4>
      <button type="button" onClick={addDictData} className="custom_btn">+</button>
      {dictData && dictData.map((item) => (
        <div className="row" key={item.id}>
          <div className="col-2 text-left">
            <button type="button" onClick={() => updateDictData(item.id)} className="custom_btn">e</button>
            <button type="button" onClick={() => deleteDictData(item.id)} className="custom_btn">-</button>
          </div>
          <div className="col-10">{item.name}</div>
        </div>
      ))}
    </BlockContainer>
  );
}

DictComponent.propTypes = {
  dictParams: PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
  appliedClass: PropTypes.string,
};
DictComponent.defaultProps = {
  appliedClass: '',
};
export default DictComponent;
