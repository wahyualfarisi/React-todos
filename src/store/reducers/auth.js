import * as actionTypes from './../actions/types';
import AuthService from './../../services/auth_service';

const initialState = {
    currentUser: undefined,
    isLogin: false,
    loading: true
};

const reducer = (state = initialState, action) => {
    switch(action.type)
    {
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

        case actionTypes.LOGOUT:
            return {
                ...state,
                isLogin: false
            }
            
        default: 
        return state;
    }
}

export default reducer;