/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import BlendsActions from '../services/blends-handler';
import BlockContainer from '../shared/blockContainer/BlockContainer';
import PageContainer from '../shared/pageContainer/PageContainer';

function Blends() {
  const [blendsData, setBlendsData] = useState(null);
  const [blendsLoader, setBlendsLoader] = useState(true);
  const [blendsError, setBlendsError] = useState(null);

  useEffect(() => {
    setBlendsError(null);
    setBlendsLoader(true);
    BlendsActions.getBlendsTableData()
      .then((data) => {
        setBlendsData(data);
        setBlendsLoader(false);
      }).catch((err) => { setBlendsError(err); setBlendsLoader(false); });
  }, []);

  return (
    <PageContainer>
      <BlockContainer loader={blendsLoader} error={blendsError}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Country</th>
              <th scope="col">Name</th>
              <th scope="col">Processing</th>
              <th scope="col">Taste</th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody>
            {blendsData && blendsData.map((blend) => (
              <tr>
                <th scope="row">{blend.id}</th>
                <td>{blend.country}</td>
                <td>{blend.name}</td>
                <td>{blend.processing}</td>
                <td>{blend.taste}</td>
                <td>-</td>
              </tr>
            ))}
            {!blendsData && <tr><td colSpan={6} className="text-center">No data found</td></tr>}
          </tbody>
        </table>
      </BlockContainer>
    </PageContainer>
  );
}

export default Blends;
