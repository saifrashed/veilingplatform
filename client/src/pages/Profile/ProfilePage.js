import React from 'react';
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";

import Favorites from "../../components/Favorites/Favorites";

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
                                    <a href="/profile/#">
                                        <li className="list-group-item">Gewonnen veilingen</li>
                                    </a>

                                    <a href="/profile/#">
                                        <li className="list-group-item">Biedingen</li>
                                    </a>

                                    <a href="/profile/favorites">
                                        <li className="list-group-item">Favorieten</li>
                                    </a>

                                    <a href="/profile/#">
                                        <li className="list-group-item">Aanbevolen voor jou</li>
                                    </a>

                                    <a href="/profile/#">
                                        <li className="list-group-item">Profiel en instellingen</li>
                                    </a>

                                    <a href="/profile/#">
                                        <li className="list-group-item">Prestaties</li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="col-sm-12 col-md-8 col-lg-9 p-2">
                        <BrowserRouter>
                            <Switch>
                                <Route path={'/profile/favorites'} component={Favorites}/>
                            </Switch>
                        </BrowserRouter>
                    </div>

                </div>


            </div>
        </>
    );
};


export default ProfilePage;
