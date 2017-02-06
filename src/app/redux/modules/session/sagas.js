import { takeLatest, delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { createUser } from '../../../api';

import { CREATE_USER } from './';
import {
  startSpinner, stopSpinner, createUserSuccess,
  createUserFailure, clearErrors,
} from './';



function * watchCreateUser() {
  yield takeLatest(CREATE_USER, createUserSaga)
}

function * registerRequests(data) {
  for(let i = 0; i < 5; i++) {
    try {
      let apiResponse;
      return apiResponse = yield call(createUser, {...data});
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
  } catch (err) {
    yield put(createUserFailure());
  }
  yield put(stopSpinner());
}


export default [
  watchCreateUser,
];

