/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from 'react';
import {
  Droplet, Edit2, Eye, Plus, Sun
} from 'react-feather';
import BlendsActions from '../services/blends-handler';
import BlockContainer from '../shared/blockContainer/BlockContainer';
import Modal from '../shared/modal/Modal';
import PageContainer from '../shared/pageContainer/PageContainer';
import './Blends.css';
import BlendDetailsEdit from './details/BlendDetailsEdit';
import BlendDetailsView from './details/BlendDetailsView';

function Blends() {
  const modes = {
    view: 1,
    edit: 2,
    add: 3
  };
  const [blendsData, setBlendsData] = useState(null);
  const [blendsLoader, setBlendsLoader] = useState(true);
  const [blendsError, setBlendsError] = useState(null);

  const [blendData, setBlendData] = useState(null);
  const [mode, setMode] = useState(modes.view);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setBlendsError(null);
    setBlendsLoader(true);
    BlendsActions.getBlendsTableData()
      .then((data) => {
        setBlendsData(data);
        setBlendsLoader(false);
      }).catch((err) => { setBlendsError(err); setBlendsLoader(false); });
  }, []);

  const viewEditClick = (id, modeValue) => {
    setMode(modeValue);
    BlendsActions.getBlendInfo(id)
      .then((data) => {
        setBlendData(data);
        setShowModal(true);
      });
  };

  const addClick = () => {
    setBlendData(null);
    setMode(modes.add);
    setShowModal(true);
  };

  const addRecord = (data) => {
    BlendsActions.addBlend(data)
      .then((newRecord) => {
        setBlendsData([...blendsData, newRecord]);
        setShowModal(false);
      });
  };

  const editRecord = (data) => {
    BlendsActions.editBlend(data)
      .then((updatedRecord) => {
        setBlendsData((prev) => {
          const indexOfEl = prev.findIndex((prevRecord) => prevRecord.id === updatedRecord.id);
          prev.splice(indexOfEl, 1, updatedRecord);
          return [...prev];
        });
        setShowModal(false);
      });
  };

  const renderSwitch = (modeValue) => {
    switch (modeValue) {
      case modes.add:
        return <BlendDetailsEdit blendData={blendData} onHandle={addRecord} />;
      case modes.edit:
        return <BlendDetailsEdit blendData={blendData} onHandle={editRecord} />;
      default:
        return <BlendDetailsView blendData={blendData} />;
    }
  };

  const renderProcessing = (processingValue) => {
    switch (processingValue) {
      case 'мытая':
        return <Droplet color="black" size="20" />;
      case 'сухая':
        return <Sun color="black" size="20" />;
      default:
        return '';
    }
  };

  const modalClose = () => {
    setShowModal(false);
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
            {blendsData && blendsData.map((blend) => (
              <Fragment key={`blend_${blend.id}`}>
                <tr>
                  <th scope="row">{blend.id}</th>
                  <td>{blend.country}</td>
                  <td>{blend.name}</td>
                  <td>
                    {renderProcessing(blend.processing)}
                  </td>
                  <td>
                    {`Acid: ${blend.taste?.acid || '-'}% Sweet: ${blend.taste?.sweet || '-'}%
                    Intensity: ${blend.taste?.intensity || '-'}%`}
                  </td>
                  <td>
                    <button
                      type="button"
                      className="custom_btn"
                      onClick={() => viewEditClick(blend.id, modes.view)}
                    >
                      <Eye color="white" size="15" />
                    </button>
                    <button
                      type="button"
                      className="custom_btn"
                      onClick={() => viewEditClick(blend.id, modes.edit)}
                    >
                      <Edit2 color="white" size="15" />
                    </button>
                  </td>
                </tr>
              </Fragment>
            ))}
            {!blendsData && <tr><td colSpan={6} className="text-center">No data found</td></tr>}
          </tbody>
        </table>
      </BlockContainer>
      {showModal && (<Modal onClose={modalClose}>{renderSwitch(mode)}</Modal>)}
    </PageContainer>
  );
}

export default Blends;
