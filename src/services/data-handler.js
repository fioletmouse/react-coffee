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
    findByCode,
    findByCodeError,
  };
}

export default CoffeeActions();
