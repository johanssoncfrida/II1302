import "materialize-css/dist/css/materialize.min.css";
import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
import firebaseConfig from "./services/firebase";
import { createStore, combineReducers, compose } from 'redux';
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase';
// import 'firebase/auth'

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users'
}

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer
})

// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState)

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
}


ReactDOM.render(
  <Provider store={store}>
  <ReactReduxFirebaseProvider {...rrfProps}>
    {/*<AuthIsLoaded>*/}
    <App />
    {/*</AuthIsLoaded>*/}
  </ReactReduxFirebaseProvider>
</Provider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
