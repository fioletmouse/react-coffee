function DictActions(path) {
  let dictData = null;
  const getDictData = async () => dictData;

  const addDictData = async (value) => {
    console.log(`called file with parameter ${path}`);
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
