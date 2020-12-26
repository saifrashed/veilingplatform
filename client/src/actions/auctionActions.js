import {ADD_AUCTION_TO_FAVORITES, REMOVE_AUCTION_FROM_FAVORITES} from "./types.js";


export const addAuctionToFavorites = product => {
    return {
        type: ADD_AUCTION_TO_FAVORITES,
        payload: product
    }
};

export const removeAuctionFromFavorites = productId => {
    return {
        type: REMOVE_AUCTION_FROM_FAVORITES,
        payload: productId
    }
};
