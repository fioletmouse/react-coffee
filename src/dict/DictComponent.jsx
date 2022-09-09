import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import DictActions from '../services/dict-handler';
import Loader from '../shared/loader/Loader';

function DictComponent({ dictName }) {
  const [processingLoader, setProcessingLoader] = useState(true);
  const [processing, setProcessing] = useState(null);
  const dictInstance = useMemo(() => DictActions(dictName), [dictName]);

  const getProcessing = () => {
    // setRecipesError(null);
    setProcessingLoader(true);
    dictInstance.getProcessing()
      .then((data) => {
        setProcessing(data);
        setProcessingLoader(false);
      }).catch(() => { /* setRecipesError(err); */ setProcessingLoader(false); });
  };
  useEffect(() => {
    getProcessing();
  }, []);

  const addProcesing = () => {
    dictInstance.addProcessing(`value${Math.random()}`);
    getProcessing();
  };

  return (
    <div>
      <Loader loader={processingLoader} />
      <button type="button" onClick={addProcesing}> Add</button>
      {processing && processing.map((item) => <div>{item.name}</div>)}
    </div>
  );
}

DictComponent.propTypes = {
  dictName: PropTypes.string.isRequired,
};

export default DictComponent;
