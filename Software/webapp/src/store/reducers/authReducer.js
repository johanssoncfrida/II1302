import { SIGNUP_SUCCESS, SIGNUP_ERROR,
    SIGNIN_SUCCESS, SIGNIN_ERROR,
    SIGNOUT_SUCCESS, SIGNOUT_ERROR 
} from '../actions/actionTypes';

const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS: 
            return {
                ...state,
                authError: null,
            };
        case SIGNUP_ERROR:
            return {
                ...state,
                authError: "Sign up failed",
            };
        case SIGNIN_SUCCESS: 
            return {
                ...state,
                authError: null,
            };
        case SIGNIN_ERROR:
            return {
                ...state,
                authError: "Sign in failed",
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