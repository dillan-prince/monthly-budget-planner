import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import authenticationReducer from './authenticationReducer';
import spinnerReducer from './spinnerReducer';
import eventReducer from './eventReducer';
import accountReducer from './accountReducer';

export default combineReducers({
  form: reduxForm,
  user: authenticationReducer,
  loading: spinnerReducer,
  event: eventReducer,
  accounts: accountReducer
});
