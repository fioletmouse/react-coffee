const compareFn = (a, b) => {
  if (a.id < b.id) {
    return -1;
  }
  if (a.id > b.id) {
    return 1;
  }
  // a must be equal to b
  return 0;
};

export default {
  compareFn
};
