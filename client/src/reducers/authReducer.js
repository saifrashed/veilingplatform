import {LOADING_AUTH, LOGIN_AUTH, LOGOUT_AUTH, REGISTER_AUTH, SET_TOKEN, VERIFY_AUTH} from "../actions/types.js";

const initialState = {
    token:    undefined,
    loading:  false,
    mailSent: false,
    verified: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_AUTH:
            return {
                ...state,
                loading: false
            };
        case LOGOUT_AUTH:
            return {
                ...state,
                token:    undefined,
                verified: false,
                loading:  false
            };
        case REGISTER_AUTH:
            return {
                ...state,
                loading: false
            };
        case VERIFY_AUTH:
            return {
                ...state,
                verified: action.payload,
                loading:  false
            };
        case SET_TOKEN:
            return {
                ...state,
                token:   action.payload,
                loading: false
            };
        case LOADING_AUTH:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}

