import * as actionTypes from './types';

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

export const authSuccess = (data) => {
    const token = JSON.parse(localStorage.getItem('user')).token 
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

export const logoutSuccess = ( ) => {
    localStorage.removeItem('user');
    return {
        type: actionTypes.LOGOUT_SUCCESS
    }
}

export const logoutFail = (err) => {
    localStorage.removeItem('user');
    return {
        type: actionTypes.LOGOUT_FAIL,
        error: err
    }
}

export const auth = (email, password) => {
    return {
        type: actionTypes.AUTH_INITIAL,
        email: email,
        password: password
    }
}

export const authCheckStatus = () => {
    return {
        type: actionTypes.CHECK_AUTH_INITIAL
    }
}

export const logout = () => {
    return {
        type: actionTypes.LOGOUT_INITIAL
    }
}

export const authClearError = () => {
    return {
        type: actionTypes.AUTH_CLEAR_ERROR
    }
}

