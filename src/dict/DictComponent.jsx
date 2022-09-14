import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import * as Icons from 'react-feather';
import DictActions from '../services/dict-handler';
import ActionInput from '../shared/actionInput/ActionInput';
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

  const addDictData = (name) => {
    if (name.trim().length === 0) return;
    dictInstance.addDictData(name)
      .then((data) => {
        setDictData(data);
        getDictData();
      }).catch((err) => { setDictError(err); });
  };
  const updateDictData = (id, text) => {
    if (text.trim().length === 0) return;
    dictInstance.updateDictData(id, text)
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
        <div className="col-12" data-test={`header_${dictParams.name}`}>
          <h4>{dictParams.name}</h4>
          <ActionInput actionHandler={addDictData} />
        </div>
      </div>

      {dictData && dictData.map((item) => (
        <div className="row" key={item.id}>
          <div className="col-12">
            <button
              type="button"
              data-test={`button_delete_${dictParams.name}`}
              onClick={() => deleteDictData(item.id)}
              className="custom_btn"
            >
              <Icons.Trash color="white" size="15" />
            </button>
            <ActionInput
              actionHandler={updateDictData}
              initialObject={item}
              actionComponent={<Icons.Edit2 color="white" size="15" />}
            />
          </div>
        </div>
      ))}
      {(!dictData || dictData.length === 0) && <div>No data found</div>}
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
