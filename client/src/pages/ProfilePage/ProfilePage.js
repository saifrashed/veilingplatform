import React from 'react';
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";

import ShoppingCart from "../../components/Favorites/Favorites";

const ProfilePage = (props) => {
    return (
        <>
            <div className="container" style={{paddingTop: '6rem'}}>

                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-3 p-2">
                        <div className="card">
                            <div className="card-header bg-dark text-light">
                                <i className="fas fa-user pr-2"></i>
                                Profiel
                                <div className="clearfix"></div>
                            </div>

                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <NavLink to="/profile/favorites">
                                        <li className="list-group-item">Gewonnen veilingen</li>
                                    </NavLink>

                                    <NavLink to="/profile/favorites">
                                        <li className="list-group-item">Biedingen</li>
                                    </NavLink>

                                    <NavLink to="/profile/favorites">
                                        <li className="list-group-item">Favorieten</li>
                                    </NavLink>

                                    <NavLink to="/profile/favorites">
                                        <li className="list-group-item">Aanbevolen voor jou</li>
                                    </NavLink>

                                    <NavLink to="/profile/favorites">
                                        <li className="list-group-item">Profiel en instellingen</li>
                                    </NavLink>

                                    <NavLink to="/profile/favorites">
                                        <li className="list-group-item">Prestaties</li>
                                    </NavLink>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="col-sm-12 col-md-8 col-lg-9 p-2">
                        <BrowserRouter>
                            <Switch>
                                <Route exact path={'/profile/favorites'} component={ShoppingCart}/>
                            </Switch>
                        </BrowserRouter>
                    </div>

                </div>


            </div>
        </>
    );
};


export default ProfilePage;
