import { SIGNUP_SUCCESS, SIGNUP_ERROR,
    SIGNIN_SUCCESS, SIGNIN_ERROR,
    SIGNOUT_SUCCESS, SIGNOUT_ERROR 
} from '../actions/actionTypes';

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();
  
      firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((response) => {
            return firebase.database().ref('users/' + response.user.uid).set({
                firstname: newUser.firstName,
                lastname: newUser.lastName,
                message: "",
                saved_messages: [
                    {id: 1, message: ""},
                    {id: 2, message: ""},
                    {id: 3, message: ""},
                ],
            })
        })
        .then(() => {
          dispatch({ type: SIGNUP_SUCCESS });
        })
        .catch((err) => {
          dispatch({ type: SIGNUP_ERROR, err });
        });
    };
};

export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => {
                dispatch({ type: SIGNIN_SUCCESS });
            })
            .catch((err) => {
                dispatch({ type: SIGNIN_ERROR, err })
            });
    };
};

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase
            .auth()
            .signOut()
            .then(() => {
                dispatch({ type: SIGNOUT_SUCCESS })
            })
            .catch((err) => {
                dispatch({ type: SIGNOUT_ERROR })
            });
    };
};