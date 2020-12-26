import {CLEAR_ORDER_BY_PRICE, ORDER_BY_ASC, ORDER_BY_DESC} from "../actions/types.js";

const initialState = {
    brandFilter: "",
    orderBy:     false
};

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_BY_ASC:
            return {
                orderBy: 'asc'
            };
        case ORDER_BY_DESC:
            return {
                orderBy: 'desc'
            };
        case CLEAR_ORDER_BY_PRICE:
            return {
                orderBy: ''
            };
        default:
            return state;
    }
};

