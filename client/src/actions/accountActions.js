import axios from 'axios';

import * as commonActions from './commonActions';
import { FETCH_ACCOUNTS } from './types';

export const fetchAccounts = () => async (dispatch) => {
  dispatch(commonActions.showSpinner(true));

  try {
    const res = await axios.get('/api/accounts/');

    dispatch({
      type: FETCH_ACCOUNTS,
      payload: res.data
    });
  } catch (error) {
    dispatch(commonActions.showNotification('error', error));
  }

  dispatch(commonActions.showSpinner(false));
};
