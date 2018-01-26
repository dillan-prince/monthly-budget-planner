import axios from 'axios';

import * as commonActions from './commonActions';
import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch) => {
  dispatch(commonActions.showSpinner(true));

  const res = await axios.get('api/authentication/user');

  dispatch({
    type: FETCH_USER,
    payload: res.data
  });

  dispatch(commonActions.showSpinner(false));
};
