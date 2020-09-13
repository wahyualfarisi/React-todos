import * as actionTypes from './types';
import authService from './../../services/auth_service';

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
    return dispatch => {
        dispatch(authStart());
        authService.login(email, password)
                   .then(res => {
                        localStorage.setItem('user', JSON.stringify(res.data));
                        dispatch(authSuccess(res.data.results))
                   })
                   .catch(err => {
                        dispatch(authFail(err))
                   })
    }
}

export const authCheckStatus = () => {
    return dispatch => {
        dispatch( authCheckState() )
        const user = localStorage.getItem('user');
        if(user){
            authService.verify()
                       .then(res => {
                           dispatch( authSuccess(res.data.results) )
                       })
                       .catch(err => {
                           dispatch( logoutSuccess() )
                       })
        }
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(logoutStart());
        authService.logout()
                .then(res => {
                    dispatch(logoutSuccess())
                })
                .catch(err => {
                    dispatch(logoutFail(err))
                })
    }
}

