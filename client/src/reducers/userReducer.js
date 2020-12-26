import {GET_USERS, GET_USER, ADD_USER, UPDATE_USER, DELETE_USER, LOADING_USER} from "../actions/types.js";

const initialState = {
    user:    {},
    loading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user:    action.payload,
                loading: false
            };
        case UPDATE_USER:
            return {
                ...state,
                loading: false
            };
        case DELETE_USER:
            return {
                ...state,
                loading: false
            };
        case LOADING_USER:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
