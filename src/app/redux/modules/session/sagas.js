import { takeLatest, delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { browserHistory } from 'react-router'
import { createUser, loginUser } from '../../../api';
import { sagaLongRequest } from '../../helpers';

import {
  CREATE_USER, LOGIN_USER_REQUEST,
  startSpinner, stopSpinner,
  clearSessionErrors, setSessionErrors,
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
    const response = yield call(sagaLongRequest, createUser, action.payload, 5);

    if (response.success) {
      yield delay(1500);
      yield put(stopSpinner());

      yield put(clearSessionErrors());
      yield browserHistory.push('/signIn');
    }

    if (!response.success) {
      yield put(stopSpinner());
      yield put(setSessionErrors(response.message));
    }

  } catch (err) {
    yield put(stopSpinner());
    yield put(setSessionErrors('Connection error'));
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
    const response = yield call(sagaLongRequest, loginUser, action.payload, 5);

    if (response.success) {
      console.log('User has been authenticated', response);
    }

    if (!response.success) {
      yield put(setSessionErrors(response.errorMessage));
    }

  } catch (err) {
    yield put(setSessionErrors('Connection error'));
  }
  yield put(stopSpinner());
}


export default [
  watchCreateUser,
  watchLoginUser,
];
