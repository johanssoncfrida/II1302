import { GET_CURRENT_MESSAGE } from '../actions/actionTypes';
import { SET_CURRENT_MESSAGE } from '../actions/actionTypes';
import { GET_MESSAGE_ERROR } from '../actions/actionTypes';
import { SET_MESSAGE_ERROR } from '../actions/actionTypes';

const initState = {
    currentMessage: ""
};

const messageReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_CURRENT_MESSAGE:
            return {
                ...state,
                currentMessage: action.payload
            };
        case GET_MESSAGE_ERROR:
            return state;
        case SET_CURRENT_MESSAGE:
            return state;
        case SET_MESSAGE_ERROR:
            return state;
        default:
            return state;
    };
};

export default messageReducer;