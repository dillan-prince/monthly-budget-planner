import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import authenticationReducer from './authenticationReducer';
import spinnerReducer from './spinnerReducer';
import eventReducer from './eventReducer';
import accountReducer from './accountReducer';
import accountSelectedReducer from './accountSelectedReducer';

export default combineReducers({
  accounts: accountReducer,
  event: eventReducer,
  form: reduxForm,
  loading: spinnerReducer,
  selectedAccount: accountSelectedReducer,
  user: authenticationReducer
});
