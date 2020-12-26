import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from "./store";
import axios from 'axios';

import Startup from "./Startup";

import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import './App.scss';
import Home from "./views/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./views/ProductDetail/ProductDetail";
import Profile from "./views/Profile/Profile";
import Registration from "./views/Registration/Registration";
import Login from "./views/Login/Login";
import Auctions from "./views/Auctions/Auctions";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            token: undefined,
            user:  undefined
        }
    }

    componentWillMount() {
        this.checkLoggedIn();
    }

    /**
     * Check for token and verify
     *
     * @returns {Promise<void>}
     */
    checkLoggedIn = async () => {

        // storage token
        let token = localStorage.getItem("auth-token");

        // mail token
        const url         = new URL(window.location.href);
        const accessToken = url.searchParams.get("token");

        if (token === null) {
            localStorage.setItem("auth-token", "");
            token = "";
        }

        // verify token
        const tokenRes = await axios.post("/users/verify", null, {headers: {"x-auth-token": token}});

        // get & set user data
        if (tokenRes.data) {
            const userRes = await axios.get("/users/", {headers: {"x-auth-token": token}});

            this.setState({
                token: token,
                user:  userRes.data
            })
        } else if (accessToken) {
            const userRes = await axios.get("/users/", {headers: {"x-auth-token": accessToken}});

            localStorage.setItem("auth-token", accessToken);

            this.setState({
                token: accessToken,
                user:  userRes.data
            })
        }
    };


    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <React.Fragment>
                        <Header showNav={true} isLogged={!!this.state.token} accessLevel={0} />
                        <Switch>
                            <Startup token={this.state.token} user={this.state.user}>
                                <Route exact path={'/'} render={() => {
                                    return <Redirect to={'/'}/>
                                }}/>

                                <Route exact path={'/'} component={Home}/>
                                <Route exact path={'/auctions/:category'} component={Auctions}/>
                                <Route exact path={'/auctions/:category/:id'} component={ProductDetail}/>
                                <Route path={'/profile'} component={Profile}/>
                                <Route exact path={'/registration'} component={Registration}/>
                                <Route exact path={'/login'} component={Login}/>
                            </Startup>
                        </Switch>
                        <Footer/>
                    </React.Fragment>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
