import { takeLatest, delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { browserHistory } from 'react-router'
import { createUser, loginUser } from '../../../api';
import { sagaLongRequest, setErrorsHelper } from '../../helpers';

import {
  CREATE_USER, LOGIN_USER_REQUEST,
  startSpinner, stopSpinner,
  clearSessionErrors, setSessionErrors,
  setUser,
} from './';



/*
*  *  *  *  *  Create new user  *  *  *  *  *
* */
function * watchCreateUser() {
  yield takeLatest(CREATE_USER, createUserSaga)
}

function * createUserSaga(action){
  yield put(clearSessionErrors());
  yield put(startSpinner());

  try {
    const response = yield call(sagaLongRequest, createUser, action.payload);

    if (response.success) {
      yield put(stopSpinner());
      yield put(setSessionErrors({ ...setErrorsHelper(response.message, response.success) }));

      yield delay(1000);
      yield put(clearSessionErrors());
      yield browserHistory.push('/signIn');
    }

    if (!response.success) {
      yield put(stopSpinner());
      yield put(setSessionErrors({ ...setErrorsHelper(response.message) }));
    }

  } catch (err) {
    yield put(stopSpinner());
    yield put(setSessionErrors({ ...setErrorsHelper('Connection error') }));
  }
}



/*
*  *  *  *  *  Login user  *  *  *  *  *
* */
function * watchLoginUser() {
  yield takeLatest(LOGIN_USER_REQUEST, loginUserSaga)
}

function * loginUserSaga(action) {
  yield put(clearSessionErrors());
  yield put(startSpinner());
  try {
    const user = yield call(sagaLongRequest, loginUser, action.payload);

    if (user.success) {
      yield put(setUser(user));

      localStorage.setItem('localUserData', JSON.stringify({ ...user }));
      // JSON.parse(localStorage.getItem('localUserData'))   <-- get data from local storage
    }

    if (!user.success) {
      yield put(setSessionErrors({ ...setErrorsHelper(user.errorMessage) }));
    }

  } catch (err) {
    yield put(setSessionErrors({ ...setErrorsHelper('Connection error') }));
  }
  yield put(stopSpinner());
}


export default [
  watchCreateUser,
  watchLoginUser,
];
