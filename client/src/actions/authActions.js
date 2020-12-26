import axios from "axios";
import {LOADING_AUTH, LOGIN_AUTH, LOGOUT_AUTH, REGISTER_AUTH, SET_TOKEN, VERIFY_AUTH} from "./types.js";

export const loginAuth = (body) => async dispatch => {
    try {
        dispatch(setAuthLoading());
        const userLogin = await axios.post("/users/login", body).then((res) => res);

        dispatch({
            type: LOGIN_AUTH,
        });

        // window.location.replace("?token="+ userLogin.data.token);

        return {status: true, data: userLogin};
    } catch (err) {
        return {status: false, msg: err.response.data.msg};
    }
};

export const registerAuth = (body) => async dispatch => {
    try {
        dispatch(setAuthLoading());
        const userRegister = await axios.post("/users/register", body).then((res) => res);

        dispatch({
            type: REGISTER_AUTH,
        });

        return {status: true, data: userRegister};
    } catch (err) {
        return {status: false, msg: err.response.data.msg};
    }
};

export const verifyAuth = (token) => async dispatch => {
    try {
        const verified = await axios.post("/users/verify/", null, {headers: {"x-auth-token": token}});

        dispatch({
            type:    VERIFY_AUTH,
            payload: verified.data
        });

        dispatch(setToken(token));

        return verified.data;
    } catch (err) {
        console.log(err)
    }
};

export const setToken = (token) => dispatch => {
    dispatch({
        type:    SET_TOKEN,
        payload: token
    });
};

export const logoutAuth = () => dispatch => {
    dispatch(setAuthLoading());

    localStorage.removeItem("auth-token");

    dispatch({
        type: LOGOUT_AUTH,
    })
};

export const setAuthLoading = () => {
    return {
        type: LOADING_AUTH
    }
};
