import { takeLatest, delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { browserHistory } from 'react-router'
import { createUser, loginUser, getUser } from '../../../api';
import { sagaLongRequest, setErrorsHelper } from '../../helpers';

import {
  CREATE_USER, LOGIN_USER_REQUEST,
  LOGOUT_USER, CHECK_USER_TOKEN,
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
      // TODO create utils functions to save and handle localStorage actions
      yield localStorage.setItem('localUserData', JSON.stringify({ ...user }));
      yield browserHistory.push('/home');
    }

    if (!user.success) {
      yield put(setSessionErrors({ ...setErrorsHelper(user.errorMessage) }));
    }

  } catch (err) {
    yield put(setSessionErrors({ ...setErrorsHelper('Connection error') }));
  }
  yield put(stopSpinner());
}



/*
 *  *  *  *  *  Logout user  *  *  *  *  *
 * */
function * watchLogoutUser() {
  yield takeLatest(LOGOUT_USER, logoutUserSaga)
}

function * logoutUserSaga() {

  yield yield browserHistory.push('/signIn');
  yield localStorage.clear();

}



/*
 *  *  *  *  *  Check user authentication  *  *  *  *  *
 * */
function * watchUserAuthentication() {
  yield takeLatest(CHECK_USER_TOKEN, userAuthenticationSaga)
}

function * userAuthenticationSaga() {
  const userLocal = JSON.parse(localStorage.getItem('localUserData'));

  // first - check user from local storage 
  if (!userLocal) yield logoutUserSaga();

  yield put(startSpinner());
  try {
    const freshUser = yield call(sagaLongRequest, getUser, userLocal.userId);
    yield put(setUser(freshUser));

  } catch (err) {
    console.log('err');
  }
  yield put(stopSpinner());

}




export default [
  watchCreateUser,
  watchLoginUser,
  watchLogoutUser,
  watchUserAuthentication,
];
