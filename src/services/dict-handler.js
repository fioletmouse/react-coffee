function DictActions(path) {
  let dictData = null;
  const getDictData = async () => dictData;
  // Test mock data
  if (path === 'processing') {
    dictData = [{ id: 1, name: 'Мытая' }, { id: 2, name: 'Сухая' }];
  }

  const addDictData = async (value) => {
    if (!dictData) dictData = [];
    dictData.push({ id: Math.random(), name: value });
  };

  const updateDictData = async (id, value) => {
    if (!dictData) throw new Error('no data');
    const itemRef = dictData.find((item) => item.id === id);
    itemRef.name = value;
  };

  const deleteDictData = async (id) => {
    dictData = dictData.filter((item) => item.id !== id);
  };

  return {
    getDictData,
    addDictData,
    updateDictData,
    deleteDictData,
  };
}
export default DictActions;
