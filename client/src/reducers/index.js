import {combineReducers} from 'redux';
import auctionReducer from './auctionReducer';
import {filterReducer} from "./filterReducer";
import {paginationReducer} from "./paginationReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";

export default combineReducers({
    userData:    userReducer,
    authData:    authReducer,
    auctionData: auctionReducer,
    filterData:  filterReducer,
    pagination:  paginationReducer
});
