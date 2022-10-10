import utils from '../shared/utils';
import blendsInit from './coffee.json';

function BlendsActions() {
  const blends = JSON.parse(JSON.stringify(blendsInit));
  const getBlendsTableData = async () => {
    const tableData = blends.map((blend) => ({
      id: blend.id,
      name: blend.name,
      country: blend.country,
      processing: blend.processing,
      taste: blend.taste,
    }));
    return tableData;
  };

  const getBlendInfo = async (id) => {
    const selectedBlend = blends.find((blend) => blend.id === id);
    return selectedBlend;
  };

  const addBlend = async (data) => {
    const newID = blends.sort(utils.compareFn)[blends.length - 1].id + 1;
    const newData = { ...data, id: newID };
    blends.push(newData);
    return newData;
  };

  const editBlend = async (data) => {
    const indexOfEl = blends.findIndex((blend) => blend.id === data.id);
    blends.splice(indexOfEl, 1, data);
    return {
      id: data.id,
      name: data.name,
      country: data.country,
      processing: data.processing,
      taste: data.taste
    };
  };

  const deleteBlend = async (id) => {
    const indx = blends.findIndex((item) => item.id === id);
    blends.splice(indx, 1);
    return blends;
  };

  return {
    getBlendsTableData,
    getBlendInfo,
    addBlend,
    editBlend,
    deleteBlend
  };
}
export default BlendsActions();
