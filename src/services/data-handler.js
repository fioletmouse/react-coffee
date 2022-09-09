import data from './data';

function CoffeeActions() {
  let cachedList = null;

  const getRecipesListError = async () => Promise.reject(new Error('Fail to load'));

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

  const findByCodeError = async () => Promise.reject(new Error('Fail to load'));
  const findByCode = async (code) => {
    if (!code) {
      return null;
    }
    // eslint-disable-next-line no-shadow
    const item = data.find((item) => item.code === code);

    return item;
  };

  return {
    getRecipesList,
    getRecipesListError,
    // findByName,
    findByCode,
    findByCodeError,
  };
}

export default CoffeeActions();
