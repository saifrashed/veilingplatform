import {combineReducers} from 'redux';
import auction from './auction';
import {brandFilter} from "./brand.filter";
import {orderByPriceReducer} from "./orderByPrice.filter";
import {pagination} from "./pagination";

export default combineReducers({
    auction:     auction,
    brandFilter: brandFilter,
    orderBy:     orderByPriceReducer,
    pagination:  pagination
});
