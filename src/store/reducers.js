
import types from './actionTypes'

const initialState = {
  search: ''
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ACTION_CHANGE_SEARCH:
      return { ...state, search: action.payload };
    case types.ACTION_CLEAR_SEARCH:
      return { ...state, search: action.payload };
    default: 
      return state;
  }
}

export default searchReducer;
