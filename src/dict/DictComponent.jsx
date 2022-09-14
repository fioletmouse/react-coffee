import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import * as Icons from 'react-feather';
import DictActions from '../services/dict-handler';
import BlockContainer from '../shared/blockContainer/BlockContainer';
import Input from '../shared/input/Input';
import './Dict.css';

function DictComponent({ dictParams, appliedClass }) {
  const [dictLoader, setDictLoader] = useState(true);
  const [dictData, setDictData] = useState(null);
  const [dictError, setDictError] = useState(null);
  // temp solution, when work with a server - passing url will be enought
  const dictInstance = useMemo(() => DictActions(dictParams.path), [dictParams.path]);

  const [addInputHidden, setAddInputHidden] = useState(true);
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

  const addDictData = (event) => {
    dictInstance.addDictData(`${event} ${Math.random()}`)
      .then((data) => {
        setDictData(data);
        getDictData();
      }).catch((err) => { setDictError(err); });
  };
  const updateDictData = (id) => {
    dictInstance.updateDictData(id)
      .then(() => {
        getDictData();
      }).catch((err) => { setDictError(err); });
  };
  const deleteDictData = (id) => {
    dictInstance.deleteDictData(id)
      .then(() => {
        getDictData();
      }).catch((err) => { setDictError(err); });
  };

  return (
    <BlockContainer loader={dictLoader} error={dictError} inheritedClass={`col-6 ${appliedClass}`}>
      <div className="row">
        <div className="col-12">
          <h4>{dictParams.name}</h4>
          <button type="button" onClick={() => setAddInputHidden((prev) => !prev)} className="custom_btn">
            { addInputHidden && <Icons.Plus color="white" size="15" /> }
            { !addInputHidden && <Icons.X color="white" size="15" /> }
          </button>
          { !addInputHidden && <Input submitHandler={addDictData} hideBlock={setAddInputHidden} /> }
        </div>
      </div>

      {dictData && dictData.map((item) => (
        <div className="row" key={item.id}>
          <div className="col-12">
            <button type="button" onClick={() => deleteDictData(item.id)} className="custom_btn">
              <Icons.Trash color="white" size="15" />
            </button>
            <button type="button" onClick={() => updateDictData(item.id)} className="custom_btn">
              <Icons.Edit2 color="white" size="15" />
            </button>
            <span>{ item.name }</span>
          </div>
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
