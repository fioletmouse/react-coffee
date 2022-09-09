import React from 'react';
import Header from '../shared/header/Header';
import DictComponent from './DictComponent';
import ids from './idsList';

function Dict() {
  return (
    <>
      <Header />
      <DictComponent dictName={ids.processing} />
      <DictComponent dictName={ids.brewing} />
    </>
  );
}

export default Dict;
