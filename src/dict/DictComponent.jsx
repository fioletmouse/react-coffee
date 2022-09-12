import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import DictActions from '../services/dict-handler';
import BlockContainer from '../shared/blockContainer/BlockContainer';

function DictComponent({ dictName }) {
  const [dictLoader, setDictLoader] = useState(true);
  const [dictData, setDictData] = useState(null);
  const [dictError, setDictError] = useState(null);
  // temp solution, when work with a server - passing url will be enought
  const dictInstance = useMemo(() => DictActions(dictName), [dictName]);

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

  const addProcesing = () => {
    dictInstance.addDictData(`value${Math.random()}`);
    getDictData();
  };

  return (
    <BlockContainer loader={dictLoader} error={dictError} showHeader={false}>
      <button type="button" onClick={addProcesing}> Add</button>
      {dictData && dictData.map((item) => <div>{item.name}</div>)}
    </BlockContainer>
  );
}

DictComponent.propTypes = {
  dictName: PropTypes.string.isRequired,
};

export default DictComponent;
