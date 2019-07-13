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

  const emptyArticleObject = {
    code: '',
    name: '',
    image: '',
    info:''
  }

  const findByCode = (code) => {
    const allData = getAll();
    if(!code) {
      return emptyArticleObject;
    }
    const item = allData.find( item => item.code === code);

    return item;
  }

  return {
    getAll,
    findByName,
    findByCode
  }
}

export default CoffeeActions();