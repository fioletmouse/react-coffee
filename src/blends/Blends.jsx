/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from 'react';
import {
  Droplet, Edit2, Eye, Plus, Sun
} from 'react-feather';
import BlendsActions from '../services/blends-handler';
import BlockContainer from '../shared/blockContainer/BlockContainer';
import PageContainer from '../shared/pageContainer/PageContainer';
import './Blends.css';
import BlendDetailsEdit from './details/BlendDetailsEdit';
import BlendDetailsView from './details/BlendDetailsView';

function Blends() {
  const [blendsData, setBlendsData] = useState(null);
  const [blendsLoader, setBlendsLoader] = useState(true);
  const [blendsError, setBlendsError] = useState(null);

  const [blendData, setBlendData] = useState(null);

  useEffect(() => {
    setBlendsError(null);
    setBlendsLoader(true);
    BlendsActions.getBlendsTableData()
      .then((data) => {
        setBlendsData(data);
        setBlendsLoader(false);
      }).catch((err) => { setBlendsError(err); setBlendsLoader(false); });
  }, []);

  const viewClick = (id) => {
    $('.collapse').collapse('hide');
    BlendsActions.getBlendInfo(id)
      .then((data) => {
        setBlendData(data);
        $(`#collapseBlend_${id}`).collapse('toggle');
      });
  };
  const addClick = () => {
    // $('.collapse').collapse('hide');
    setBlendData(null);
    $('#collapseBlendNew').collapse('toggle');
  };

  const addRecord = (d) => {
    console.log(d);
  };
  return (
    <PageContainer>
      <BlockContainer loader={blendsLoader} error={blendsError}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Country</th>
              <th scope="col">Name</th>
              <th scope="col">Method</th>
              <th scope="col">Taste</th>
              <th scope="col">
                <button type="button" className="custom_btn" onClick={() => addClick()}>
                  <Plus color="white" size="15" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* add new record panel */}
            <tr className="collapse" id="collapseBlendNew">
              <td colSpan={6}>
                <BlendDetailsEdit onHandle={addRecord} />
              </td>
            </tr>
            {blendsData && blendsData.map((blend) => (
              <Fragment key={`blend_${blend.id}`}>
                <tr>
                  <th scope="row">{blend.id}</th>
                  <td>{blend.country}</td>
                  <td>{blend.name}</td>
                  <td>
                    {blend.processing === 'мытая'
                      ? <Droplet color="black" size="20" />
                      : <Sun color="black" size="20" />}
                  </td>
                  <td>
                    { blend.taste && `Кислотность: ${blend.taste.acid}% Сладость: ${blend.taste.sweet}%
                  Интенсивность: ${blend.taste.intensity}%`}
                  </td>
                  <td>
                    <button
                      type="button"
                      className="custom_btn"
                      onClick={() => viewClick(blend.id)}
                    >
                      <Eye color="white" size="15" />
                    </button>
                    <button type="button" className="custom_btn">
                      <Edit2 color="white" size="15" />
                    </button>
                  </td>
                </tr>
                <tr className="collapse" id={`collapseBlend_${blend.id}`}>
                  <td colSpan={6}>
                    { blendData && <BlendDetailsView blendData={blendData} />}
                  </td>
                </tr>
              </Fragment>
            ))}
            {!blendsData && <tr><td colSpan={6} className="text-center">No data found</td></tr>}
          </tbody>
        </table>
      </BlockContainer>
    </PageContainer>
  );
}

export default Blends;
