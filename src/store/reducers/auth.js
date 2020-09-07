import * as actionTypes from './../actions/types';
import AuthService from './../../services/auth_service';

const initialState = {
    currentUser: null,
    token: null,
    isLogin: false,
    loading: false,
    error: null
};

const reducer = (state = initialState, action) => {
    switch(action.type)
    {
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
                error: null
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
                        isLogin: true,
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
                loading: true
            }

        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                isLogin: false,
                currentUser: null,
                loading: false
            }
           
        case actionTypes.LOGOUT_FAIL: 
            return {
                ...state,
                isLogin: false,
                currentUser: null,
                loading: false,
                error: action.error
            }
            
        default: 
        return state;
    }
}

export default reducer;