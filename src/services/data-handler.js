import data from '../data';

function CoffeeActions () {
  let cachedList = null;

  const getAll = () => {
    if(cachedList) {
      return cachedList;
    }

    cachedList = data;
    return data;
  }

  // TODO improve to part search
  const findByName = (name) => {
    const allData = getAll();
    if(!name) {
      return allData;
    }
    const lowerName = name.toLowerCase();
    const item = allData.find( item => item.name.toLowerCase() === lowerName);

    if(item) {
      return [item];
    }
    return [];
  }

  return {
    getAll,
    findByName
  }
}

export default CoffeeActions();