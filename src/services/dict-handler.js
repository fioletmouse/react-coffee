function DictActions(path) {
  const tt = path;
  console.log(tt);
  let processing = null;
  const getProcessing = async () => processing;
  const addProcessing = async (value) => {
    console.log(`called file with parameter ${tt}`);
    if (!processing) processing = [];
    processing.push({ id: Math.random(), name: value });
  };
  const updateProcessing = async (id, value) => {
    if (!processing) throw new Error('no data');
    const itemRef = processing.find((item) => item.id === id);
    itemRef.name = value;
  };

  const deleteProcessing = async (id) => {
    processing.filter((item) => item.id !== id);
  };

  return {
    getProcessing,
    addProcessing,
    updateProcessing,
    deleteProcessing,
  };
}
export default DictActions;
