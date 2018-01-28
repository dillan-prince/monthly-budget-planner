import * as types from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case types.ACCOUNT_SELECTED:
      return action.payload;
    default:
      return state;
  }
};
