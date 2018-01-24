import { combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer';
import spinnerReducer from './spinnerReducer';

export default combineReducers({
  user: authenticationReducer,
  loading: spinnerReducer
});
