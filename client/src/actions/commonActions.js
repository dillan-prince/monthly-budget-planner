import { SHOW_SPINNER } from './types';

export const showSpinner = (state) => (dispatch) => {
  dispatch({
    type: SHOW_SPINNER,
    payload: state
  });
};

export const showNotification = (type, message) => (dispatch) => {
  console.error(`${type}: ${message}`);
};
