import React, { useEffect, useState } from 'react';
import DictActions from '../services/dict-handler';
import Header from '../shared/header/Header';

function Dict() {
  const [processingLoader, setProcessingLoader] = useState(true);
  console.log(processingLoader);
  const [processing, setProcessing] = useState(null);
  useEffect(() => {
    // setRecipesError(null);
    setProcessingLoader(true);
    DictActions.getProcessing()
      .then((data) => {
        setProcessing(data);
        setProcessingLoader(false);
      }).catch(() => { /* setRecipesError(err); */ setProcessingLoader(false); });
  }, []);

  const addProcesing = () => {
    DictActions.addProcessing(`value${Math.random()}`);
  };

  return (
    <>
      <Header />
      <div>
        <button type="button" onClick={addProcesing}> Add</button>
        {processing && processing.map((item) => <div>{item.name}</div>)}
      </div>
    </>
  );
}

export default Dict;
