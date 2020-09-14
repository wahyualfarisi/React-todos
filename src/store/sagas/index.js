import { takeEvery, all } from 'redux-saga/effects';
import * as actionTypes from './../actions/types';
import { authSaga, authCheckStatusSaga, logoutSaga } from './auth';

function* watchAuth(){
    yield all([
        takeEvery(actionTypes.AUTH_INITIAL, authSaga),
        takeEvery(actionTypes.CHECK_AUTH_INITIAL, authCheckStatusSaga),
        takeEvery(actionTypes.LOGOUT_INITIAL, logoutSaga )
    ])
}



export default function* rootSaga(){
    yield all([
        watchAuth()
    ])
}