import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

const Header = ({cartLength}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">Veilingen</NavLink>
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to={"/profile"}>
                                    <a className="nav-link" href="#"><i className="fa fa-user mr-2"/>Account</a>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/profile/favorites"}>
                                    <i className="fas fa-heart mr-2"></i>Favorieten {cartLength ? `(${cartLength})` : ''}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/profile/favorites"}>
                                    <i className="fas fa-info-circle  mr-2"/>Klantenservice
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <nav id="chapternav" className="chapternav">
                <div className="chapternav-wrapper">
                    <ul className="chapternav-items">
                        <li className="chapternav-item">
                            <NavLink to={"#"}>
                                <a className="chapternav-link">
                                    <figure className="chapternav-icon icon-tickit"></figure>
                                    <span className="chapternav-label" role="text">Producten</span>
                                </a>
                            </NavLink>
                        </li>

                        <li className="chapternav-item">
                            <NavLink to={"#"}>
                                <a className="chapternav-link" href="#">
                                    <figure className="chapternav-icon"></figure>
                                    <span className="chapternav-label" role="text">Reizen</span>
                                </a>
                            </NavLink>
                        </li>

                        <li className="chapternav-item">
                            <NavLink to={"#"}>
                                <a className="chapternav-link">
                                    <figure className="chapternav-icon"></figure>
                                    <span className="chapternav-label" role="text">Kamperen</span>
                                </a>
                            </NavLink>
                        </li>

                        <li className="chapternav-item">
                            <NavLink to={"#"}>
                                <a className="chapternav-link" href="#">
                                    <figure className="chapternav-icon"></figure>
                                    <span className="chapternav-label" role="text">Deals</span>
                                </a>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        cartLength: state.auction.cart.length
    }
};

export default connect(mapStateToProps, null)(Header);


/*
*                         <li className="nav-item active">
                            <a className="nav-link" href="#">Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
* */
