import axios from "axios";
import {DELETE_USER, GET_USER, LOADING_USER, UPDATE_USER} from "./types.js";

export const getUser = (token) => dispatch => {
    dispatch(setUserLoading());
    axios.get("/users/", {headers: {"x-auth-token": token}}).then(res =>
        dispatch({
            type:    GET_USER,
            payload: res.data[0]
        }))
};

export const updateUser = (token, body) => async dispatch => {
    dispatch(setUserLoading());
    const updatedUser = await axios.post("/users/update/", body, {headers: {"x-auth-token": token}});

    dispatch({
        type:    UPDATE_USER,
        payload: updatedUser.data
    });

    return updatedUser
};

export const deleteUser = (id) => dispatch => {
    dispatch(setUserLoading());
    axios.delete("/users/" + id).then(res =>
        dispatch({
            type:    DELETE_USER,
            payload: res.data[0]
        }))
};

export const setUserLoading = () => {
    return {
        type: LOADING_USER
    }
};

