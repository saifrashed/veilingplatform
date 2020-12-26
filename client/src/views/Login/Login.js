import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {loginAuth} from "../../actions/authActions.js";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userEmail:    '',
            userPassword: '',
        };
    }

    /**
     * Checks user data and sent authentication mail.
     *
     * @returns {Promise<void>}
     */
    loginUser = async (e) => {
        e.preventDefault();

        const userLogin = await this.props.loginAuth(this.state);

        console.log(userLogin);

        if (userLogin.status) {
            this.setState({
                userEmail:    '',
                userPassword: '',
            });

            console.log("Er is een mail verstuurd met een login link.");
        } else {
            console.log(userLogin.msg);
        }
    };

    /**
     * Handles input changes
     * @param e
     */
    handleChange(e) {
        const value = e.target.value;
        this.setState({
            ...this.state,
            [e.target.name]: value
        });
    }

    render() {
        return (
            <>
                <div className="container" style={{paddingTop: '6rem'}}>

                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 p-2">
                            <div className="card">
                                <div className="card-header bg-dark text-light">
                                    <i className="fas fa-sign-in-alt mr-2"/>
                                    Inloggen
                                    <div className="clearfix"></div>
                                </div>

                                <div className="card-body">

                                    <div className="login-form">
                                        <form>
                                            <h2 className="text-center">Log in</h2>
                                            <div className="form-group">
                                                <input type="email" name="userEmail" className="form-control"
                                                       placeholder="Email adres"
                                                       required autoFocus
                                                       value={this.state.userEmail}
                                                       onChange={(e) => {
                                                           this.handleChange(e)
                                                       }}/>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="userPassword" className="form-control"
                                                       placeholder="Wachtwoord"
                                                       required autoFocus
                                                       value={this.state.userPassword}
                                                       onChange={(e) => {
                                                           this.handleChange(e)
                                                       }}/>
                                            </div>
                                            <div className="form-group">
                                                <a
                                                    href="#"
                                                    className="btn btn-primary btn-block"
                                                    onClick={this.loginUser}
                                                >
                                                    Log in
                                                </a>
                                            </div>
                                            <div className="clearfix">
                                                <label className="pull-left checkbox-inline"><input
                                                    type="checkbox"/> Remember me </label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-12 col-md-6 col-lg-6 p-2">
                            <div className="card">
                                <div className="card-header bg-dark text-light">
                                    <i className="fas fa-info-circle  mr-2"/>
                                    Informatie
                                    <div className="clearfix"></div>
                                </div>

                                <div className="card-body">
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </>
        );
    }
};

Login.propTypes = {
    loginAuth: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    userData: state.userData,
    authData: state.authData,
});


export default connect(mapStateToProps, {loginAuth})(Login);
