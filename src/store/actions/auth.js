import * as actionTypes from './types';
import Axios from 'axios';
import authHeader from './../../services/auth-header';

const API_URL = "http://localhost:8000/api";

export const authCheckState = () => {
    return {
        type: actionTypes.CHECK_AUTH
    }
}

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (data, token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        data: data,
        token: token
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logoutStart = () => {
    return {
        type: actionTypes.LOGOUT_START
    }
}

export const logoutSuccess = ( data ) => {
    localStorage.removeItem('user');
    return {
        type: actionTypes.LOGOUT_SUCCESS,
        data: data
    }
}

export const logoutFail = (err) => {
    return {
        type: actionTypes.LOGOUT_FAIL,
        error: err
    }
}

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        Axios.post(`${API_URL}/login`, {
                   email,
                   password
               })
               .then(res => {
                   localStorage.setItem('user', JSON.stringify(res.data));
                   dispatch(authSuccess(res.data.results, res.data.token))
               })
               .catch(err => {
                   dispatch(authFail(err))
               })
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(logoutStart());
        Axios.post(`${API_URL}/logout`, {}, { headers: authHeader() })
                .then(res => {
                    dispatch(logoutSuccess(res.data))
                })
                .catch(err => {
                    dispatch(logoutFail(err))
                })
    }
}