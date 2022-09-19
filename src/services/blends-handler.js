import blends from './coffee.json';

function BlendsActions() {
  const getBlendsTableData = async () => {
    const tableData = blends.map((blend, index) => ({
      id: index + 1,
      name: blend.name,
      country: blend.country,
      processing: blend.processing,
      taste: blend.taste,
    }));
    return tableData;
  };

  return {
    getBlendsTableData,
  };
}
export default BlendsActions();
