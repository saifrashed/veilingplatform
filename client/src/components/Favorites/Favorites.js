import React from 'react';
import {connect} from 'react-redux';
import {formatMoney} from "../../pipes/priceFormatter";
import CartItem from "../CartItem/CartItem";
import {NavLink} from "react-router-dom";

const Favorites = (props) => {
    return (
        <div className="card shopping-cart">
            <div className="card-header bg-dark text-light">
                <i className="fas fa-heart pr-2"></i>
                Mijn favorieten
                <div className="clearfix"></div>
            </div>
            <div className="card-body">
                {props.cartItemCount ? props.cartItems.map(cart => (
                    <CartItem {...cart} img={cart.images[0]}/>
                )) : <div>
                     <h1 className="display-4 mt-5 text-center">Het is hier zo leeg...</h1>
                     <p className="text-center">Bewaar hier je favoriete veilingen, zodat je ze makkelijk en snel weer
                         terugvindt!</p>
                     <div className="text-center"><a href="#" className="btn btn-info">Bekijk hier alle veilingen</a></div>
                 </div>}
            </div>
            <div className="card-footer">
                <div className="pull-right" style={{margin: '10px'}}>
                    <div className="pull-right" style={{margin: '5px'}}>
                        Total price: <b>{formatMoney(props.totalPrice)}€</b>
                    </div>
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = state => {

    console.log(state, 'state has changed');

    return {
        cartItems:     state.auction.cart,
        cartItemCount: state.auction.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0),
        totalPrice:    state.auction.cart.reduce((count, curItem) => {
            return count + (curItem.price * curItem.quantity);
        }, 0)
    }
}

export default connect(mapStateToProps, null)(Favorites);
