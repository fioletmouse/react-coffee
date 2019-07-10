import data from '../data';

function CoffeeActions () {
  const getAll = () => {
    console.log('test');
    return data;
  }

  const findByName = (name) => {
    return [data[0]];
  }

  return {
    getAll,
    findByName
  }
}

export default CoffeeActions();