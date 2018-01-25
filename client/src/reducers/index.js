import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authenticationReducer from './authenticationReducer';
import spinnerReducer from './spinnerReducer';

export default combineReducers({
  form: reduxForm,
  user: authenticationReducer,
  loading: spinnerReducer
});
