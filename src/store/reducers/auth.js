import * as actionTypes from './../actions/types';
import AuthService from './../../services/auth_service';

const initialState = {
    currentUser: null,
    token: null,
    isLogin: false,
    loading: false,
    error: null,
    isPrepare: true
};

const reducer = (state = initialState, action) => {
    switch(action.type)
    {
        case actionTypes.CHECK_AUTH_INITIAL:
            return {
                ...state,
                isLogin: true
            }

        case actionTypes.AUTH_START:
            return {
                ...state,
                loading: true 
            }

        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.data,
                token: action.token,
                isLogin: true,
                error: null,
                isPrepare: false
            }

        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                currentUser: null,
                loading: false,
                error: action.error
            }

        case actionTypes.CHECK_AUTH:
                const user = AuthService.getCurrentUser();
                if(user){
                    return {
                        ...state,
                        loading: false
                    }
                }
        
            return {
                ...state,
                isLogin: false,
                loading: false
        }

        case actionTypes.LOGOUT_START:
            return {
                ...state,
                loading: true,
                isPrepare: false
            }

        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                isLogin: false,
                currentUser: null,
                loading: false,
                isPrepare: false
            }
           
        case actionTypes.LOGOUT_FAIL: 
            return {
                ...state,
                isLogin: false,
                currentUser: null,
                loading: false,
                error: action.error,
                isPrepare: false
            }
            
        case actionTypes.AUTH_CLEAR_ERROR:
            return {
                ...state,
                error: null
            }
        default: 
        return state;
    }
}

export default reducer;