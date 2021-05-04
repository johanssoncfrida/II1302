import "materialize-css/dist/css/materialize.min.css";
import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
import firebaseConfig from "./services/firebase";
import { createStore, compose, applyMiddleware } from 'redux';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import rootReducer from './store/reducers/rootReducer'
import thunk from "redux-thunk";
// import 'firebase/auth'

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users'
};

// Create store with reducers and initial state
const initialState = {}
const store = createStore(
  rootReducer, 
  initialState, 
  compose(
    applyMiddleware(thunk.withExtraArgument(getFirebase))
  )
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
};

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
