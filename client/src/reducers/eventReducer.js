import * as types from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case types.INSERT_EVENT:
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};
