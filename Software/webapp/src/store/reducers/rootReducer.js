import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import messageReducer from './messageReducer';

const rootReducer = combineReducers({
  message: messageReducer,
  firebase: firebaseReducer,
});

export default rootReducer;