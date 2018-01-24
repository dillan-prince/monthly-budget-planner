import axios from 'axios';

import { FETCH_USER, SHOW_SPINNER } from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('api/authentication/user');

  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const showSpinner = (state) => (dispatch) => {
  dispatch({
    type: SHOW_SPINNER,
    payload: state
  });
};
