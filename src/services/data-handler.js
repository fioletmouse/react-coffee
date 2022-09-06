import data from './data';

function CoffeeActions() {
  // eslint-disable-next-line no-unused-vars
  let cachedList = null;

  const getRecipesList = async () => {
    if (cachedList) {
      return cachedList;
    }
    cachedList = data.map((item) => ({
      code: item.code,
      name: item.name,
    }));
    return cachedList;
  };

  // TODO improve to part search
  // const findByName = (name) => {
  //   const allData = getAll();
  //   if (!name) {
  //     return allData;
  //   }
  //   const lowerName = name.toLowerCase();
  //   // eslint-disable-next-line no-shadow
  //   const item = allData.find((item) => item.name.toLowerCase() === lowerName);

  //   if (item) {
  //     return [item];
  //   }
  //   return [];
  // };

  // const emptyArticleObject = {
  //   code: '',
  //   name: '',
  //   image: '',
  //   info: '',
  // };

  // const findByCode = (code) => {
  //   const allData = getAll();
  //   if (!code) {
  //     return emptyArticleObject;
  //   }
  //   // eslint-disable-next-line no-shadow
  //   const item = allData.find((item) => item.code === code);

  //   return item;
  // };

  return {
    getRecipesList,
    // findByName,
    // findByCode,
  };
}

export default CoffeeActions();
