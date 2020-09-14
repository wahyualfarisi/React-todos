import { put } from 'redux-saga/effects';
import * as actions from './../actions/index';
import authService from './../../services/auth_service';

export function* authCheckStatusSaga( action ){
    yield put( actions.authCheckState() )

    try{
        const user = yield localStorage.getItem('user');
        if(user) {
            const res = yield authService.verify();
            yield put( actions.authSuccess(res.data.results) );
        }
    }catch(error){
        yield put( actions.logoutSuccess() )
    }
}

export function* authSaga( action ){
    yield put( actions.authStart() );

    try{
        const res = yield authService.login(action.email, action.password);
        yield localStorage.setItem('user', JSON.stringify(res.data));
        yield put(actions.authSuccess(res.data.results))
    }catch(error){
        yield put(actions.authFail(error))
    }
}

export function* logoutSaga( action ){
    try{
        yield put(actions.logoutStart());
        const res = yield authService.logout();
        console.log(res);
        yield put(actions.logoutSuccess())
    }catch(error){
        yield put(actions.logoutFail(error))
    }

}

