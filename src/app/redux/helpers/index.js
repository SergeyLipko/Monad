import {  delay } from 'redux-saga';
import { call } from 'redux-saga/effects';


/*
* Handle an error object that will sends to component
* */
export const setErrorsHelper = (message, success=false) => {
  return {
    message,
    success
  }
};


/*
* Trying to send request n-times and then return en error
* */
export function * sagaLongRequest(apiRequest, data, counter=5) {
  for (let i = 0; i < counter; i++) {
    try {
      let apiResponse;
      return apiResponse = yield call(apiRequest, data);
    } catch(err) {
      if (i < counter) {
        yield call(delay, 3000);
      }
    }
  }
  throw new Error('API request failed');
}