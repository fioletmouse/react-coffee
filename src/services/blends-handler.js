import blends from './coffee.json';

function BlendsActions() {
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
  return {
    getBlendsTableData,
    getBlendInfo
  };
}
export default BlendsActions();
