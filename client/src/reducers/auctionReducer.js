import {ADD_AUCTION_TO_FAVORITES, REMOVE_AUCTION_FROM_FAVORITES} from '../actions/types.js';
import {phones} from "../data/phones";

const initialState = {
    products: phones,
    cart:     []
};


const auctionData = (state = initialState, action) => {
    let updatedCart;
    let updatedItemIndex;

    switch (action.type) {
        case ADD_AUCTION_TO_FAVORITES:
            updatedCart      = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(item => item.id === action.payload.id);

            if (updatedItemIndex < 0) {
                updatedCart.push({...action.payload, quantity: 1});
            } else {
                const updatedItem = {
                    ...updatedCart[updatedItemIndex]
                };

                updatedItem.quantity++;
                updatedCart[updatedItemIndex] = updatedItem;
            }

            return {...state, cart: updatedCart};

        case REMOVE_AUCTION_FROM_FAVORITES:
            updatedCart      = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            updatedCart.splice(updatedItemIndex, 1);

            return {...state, cart: updatedCart};

        default:
            return state;

    }
};

export default auctionData;
