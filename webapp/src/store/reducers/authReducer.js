import { SIGNUP_SUCCESS, SIGNUP_ERROR,
    SIGNIN_SUCCESS, SIGNIN_ERROR,
    SIGNOUT_SUCCESS, SIGNOUT_ERROR 
} from '../actions/actionTypes';

const initState = {
    signInError: null,
    signUpError: null,
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS: 
            return {
                ...state,
                signUpError: null,
            };
        case SIGNUP_ERROR:
            return {
                ...state,
                signUpError: "Sign up failed",
            };
        case SIGNIN_SUCCESS: 
            return {
                ...state,
                signInError: null,
            };
        case SIGNIN_ERROR:
            return {
                ...state,
                signInError: "Sign in failed",
            };
        case SIGNOUT_SUCCESS: 
            return state;
        case SIGNOUT_ERROR:
            return state;
        default:
            return state;
    };
};

export default authReducer;