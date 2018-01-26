import axios from 'axios';

import * as commonActions from './commonActions';
import { INSERT_EVENT } from './types';

export const insertEvent = (event) => async (dispatch) => {
  dispatch(commonActions.showSpinner(true));

  try {
    const res = await axios.post('/api/event', event);

    dispatch({
      type: INSERT_EVENT,
      payload: res.data
    });

    dispatch(commonActions.showNotification('success', 'Your event was successfully created.'));
  } catch (error) {
    dispatch(commonActions.showNotification('error', error));
  }

  dispatch(commonActions.showSpinner(false));
};
