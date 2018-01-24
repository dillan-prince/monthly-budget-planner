import * as types from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case types.SHOW_SPINNER:
      return action.payload;
    default:
      return state;
  }
};
