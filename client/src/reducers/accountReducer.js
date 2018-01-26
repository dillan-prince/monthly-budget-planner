import * as types from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case types.FETCH_ACCOUNTS:
      return action.payload || false;
    default:
      return state;
  }
};
