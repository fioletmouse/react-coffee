import React from 'react';
import PageContainer from '../shared/pageContainer/PageContainer';
import './Dict.css';
import DictComponent from './DictComponent';
import ids from './idsList';

function Dict() {
  return (
    <PageContainer>
      <DictComponent
        dictParams={ids.processing}
        appliedClass="bottom_line right_line"
      />
      <DictComponent dictParams={ids.brewing} appliedClass="bottom_line" />
    </PageContainer>
  );
}

export default Dict;
