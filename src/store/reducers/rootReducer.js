import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import messageReducer from './messageReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  message: messageReducer,
  auth: authReducer, 
  firebase: firebaseReducer,
});

export default rootReducer;