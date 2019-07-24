import types from './actionTypes';

const changeSearchString = (newSearch) => {
  return {
    type: types.ACTION_CHANGE_SEARCH,
    payload: newSearch
  }
}

const clearSearchString = () => {
  return {
    type: types.ACTION_CLEAR_SEARCH,
    payload: ''
  }
}

export default {
  changeSearchString,
  clearSearchString
};