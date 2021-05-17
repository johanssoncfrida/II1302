import firebase from "firebase/app";
import "firebase/database";
import { GET_CURRENT_MESSAGE } from './actionTypes';
import { SET_CURRENT_MESSAGE } from './actionTypes';
import { GET_MESSAGE_ERROR } from './actionTypes';
import { SET_MESSAGE_ERROR } from './actionTypes';

export const getCurrentMessage = () => {
    return (dispatch, getState) => {
        const state = getState();
        const userId = state.firebase.auth.uid;
        const dbRef = firebase.database().ref("users/" + userId + "/message");

        dbRef.get().then((snapshot) => {
            if (snapshot.exists()) {
                dispatch({ type: GET_CURRENT_MESSAGE, payload: snapshot.val().message });
            } else {
                dispatch({ type: GET_MESSAGE_ERROR });
            }
        }).catch((error) => {
            dispatch({ type: GET_MESSAGE_ERROR, payload: error });
        });
    };
};

export const setCurrentMessage = (newMessage) => {
    return (dispatch, getState) => {
        const state = getState();
        const userId = state.firebase.auth.uid;
        const dbRef = firebase.database().ref("users/" + userId + "/message");

        dbRef.set(newMessage).then(() => {
            dispatch({ type: SET_CURRENT_MESSAGE });
        }).catch((error) => {
            dispatch({ type: SET_MESSAGE_ERROR, payload: error });
        });
    };
};
