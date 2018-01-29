import axios from 'axios';

import * as commonActions from './commonActions';
import { ACCOUNT_SELECTED } from './types';

export const insertEvent = (event, accountId) => async (dispatch) => {
  dispatch(commonActions.showSpinner(true));

  try {
    const res = await axios.post('/api/event', { ...event, accountId });

    dispatch({
      type: ACCOUNT_SELECTED,
      payload: res.data
    });

    dispatch(commonActions.showNotification('success', 'Your event was successfully created.'));
  } catch (error) {
    dispatch(commonActions.showNotification('error', error));
  }

  dispatch(commonActions.showSpinner(false));
};
