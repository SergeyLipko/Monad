import { takeLatest, delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { browserHistory } from 'react-router'
import { createUser, loginUser } from '../../../api';

import {
  CREATE_USER, LOGIN_USER_REQUEST,
  startSpinner, stopSpinner, createUserSuccess,
  createUserFailure, setLoginStatus, clearErrors,
} from './';


/*
*  *  *  *  *  Create new user  *  *  *  *  *
* */
function * watchCreateUser() {
  yield takeLatest(CREATE_USER, createUserSaga)
}
// TODO create reusable instance of this func
function * registerRequests(data) {
  for (let i = 0; i < 5; i++) {
    try {
      let apiResponse;
      return apiResponse = yield call(createUser, { ...data });
    } catch(err) {
      if (i < 5) {
        yield call(delay, 3000);
      }
    }
  }
  throw new Error('API request failed');
}

function * createUserSaga(action){
  yield put(clearErrors());
  yield put(startSpinner());

  try {
    yield call(registerRequests, action.payload);
    yield put(createUserSuccess());
    yield put(stopSpinner());

    yield delay(1500);
    yield browserHistory.push('/signIn');

  } catch (err) {
    yield put(createUserFailure());
    yield put(stopSpinner());
    console.log('User creating error', err);
  }
}


/*
*  *  *  *  *  Login user  *  *  *  *  *
* */
function * watchLoginUser() {
  yield takeLatest(LOGIN_USER_REQUEST, loginUserSaga)
}

function * loginUserSaga(action) {
  yield put(clearErrors());
  yield put(startSpinner());
  try {
    const response = yield call(loginUser, action.payload);
    // TODO add handle error when connection is broken (like in signup)
    if (response.success) {
      console.log('User has been authenticated', response);
    }

    if (!response.success) {
      yield put(setLoginStatus(response.errorMessage));
    }

  } catch (err) {
    console.log('Login user err', err);
  }
  yield put(stopSpinner());
}


export default [
  watchCreateUser,
  watchLoginUser,
];
