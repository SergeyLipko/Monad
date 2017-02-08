import { takeLatest, delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { browserHistory } from 'react-router'
import { createUser, loginUser } from '../../../api';
import { sagaLongRequest } from '../../helpers';

import {
  CREATE_USER, LOGIN_USER_REQUEST,
  startSpinner, stopSpinner,
  clearSessionStatus, setSessionStatus,
} from './';



/*
*  *  *  *  *  Create new user  *  *  *  *  *
* */
function * watchCreateUser() {
  yield takeLatest(CREATE_USER, createUserSaga)
}

function * createUserSaga(action){
  yield put(clearSessionStatus());
  yield put(startSpinner());

  try {
    const response = yield call(sagaLongRequest, createUser, action.payload, 5);

    if (response.success) {
      yield put(stopSpinner());
      yield put(setSessionStatus(response.message));

      yield delay(1500);
      yield put(clearSessionStatus());
      yield browserHistory.push('/signIn');
    }

    if (!response.success) {
      yield put(stopSpinner());
      yield put(setSessionStatus(response.message));
    }

  } catch (err) {
    yield put(stopSpinner());
    yield put(setSessionStatus('Connection error'));
  }
}



/*
*  *  *  *  *  Login user  *  *  *  *  *
* */
function * watchLoginUser() {
  yield takeLatest(LOGIN_USER_REQUEST, loginUserSaga)
}

function * loginUserSaga(action) {
  yield put(clearSessionStatus());
  yield put(startSpinner());
  try {
    const response = yield call(sagaLongRequest, loginUser, action.payload, 5);

    if (response.success) {
      console.log('User has been authenticated', response);
    }

    if (!response.success) {
      yield put(setSessionStatus(response.errorMessage));
    }

  } catch (err) {
    yield put(setSessionStatus('Connection error'));
  }
  yield put(stopSpinner());
}


export default [
  watchCreateUser,
  watchLoginUser,
];
