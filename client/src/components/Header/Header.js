import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

const Header = ({cartLength}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">VeilingenPlatform</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/login"}><i className="fas fa-sign-in-alt mr-2"/>Login</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/registration"}><i className="fas fa-clipboard mr-2"/>Registreren</NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-user mr-2"/>Account
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Biedingen</a>
                                    <a className="dropdown-item" href="#">Gewonnen veilingen</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Profiel bijwerken</a>
                                </div>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/profile"}><i className="fas fa-info-circle  mr-2"/>Klantenservice</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/profile/favorites"}><i className="fas fa-heart mr-2"></i>Favorieten
                                </NavLink>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Zoeken op naam"
                                   aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>

                            <NavLink className="btn btn-outline-primary my-2 ml-2 my-sm-0" to={"/admin"}><i className="fas fa-users-cog"></i></NavLink>

                            <NavLink className="btn btn-outline-primary my-2 ml-2 my-sm-0" to={"/auctioneer"}><i className="fas fa-store"></i></NavLink>
                        </form>
                    </div>
                </div>
            </nav>

            <nav id="chapternav" className="chapternav d-none">
                <div className="chapternav-wrapper">
                    <ul className="chapternav-items">
                        <li className="chapternav-item">
                                <a className="chapternav-link">
                                    <figure className="chapternav-icon icon-tickit"></figure>
                                    <span className="chapternav-label" role="text">Producten</span>
                                </a>
                        </li>

                        <li className="chapternav-item">
                                <a className="chapternav-link" href="#">
                                    <figure className="chapternav-icon"></figure>
                                    <span className="chapternav-label" role="text">Reizen</span>
                                </a>
                        </li>

                        <li className="chapternav-item">
                                <a className="chapternav-link">
                                    <figure className="chapternav-icon"></figure>
                                    <span className="chapternav-label" role="text">Kamperen</span>
                                </a>
                        </li>

                        <li className="chapternav-item">
                                <a className="chapternav-link" href="#">
                                    <figure className="chapternav-icon"></figure>
                                    <span className="chapternav-label" role="text">Deals</span>
                                </a>
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
