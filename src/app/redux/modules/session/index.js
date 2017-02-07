import { createAction, handleActions } from 'redux-actions';

const INITIAL_STATE = {
  isAuthenticated: false,
  authenticatedUser: null,
  registrationRequestStatus: null,
  loginRequestStatus: null,
  isLoading: false,
};


export const CREATE_USER = 'session/CREATE_USER';
export const createUser = createAction(CREATE_USER);

export const CREATE_USER_SUCCESS = 'session/CREATE_USER_SUCCESS';
export const createUserSuccess = createAction(CREATE_USER_SUCCESS);

export const CREATE_USER_FAILURE = 'session/CREATE_USER_FAILURE';
export const createUserFailure = createAction(CREATE_USER_FAILURE);

export const LOGIN_USER_REQUEST = 'session/LOGIN_USER_REQUEST';
export const loginUserRequest = createAction(LOGIN_USER_REQUEST);

export const SET_LOGIN_STATUS = 'session/SET_LOGIN_STATUS';
export const setLoginStatus = createAction(SET_LOGIN_STATUS);

export const CLEAR_ERRORS = 'session/CLEAR_ERRORS';
export const clearErrors = createAction(CLEAR_ERRORS);

export const START_SPINNER = 'session/START_SPINNER';
export const startSpinner = createAction(START_SPINNER);

export const STOP_SPINNER = 'session/STOP_SPINNER';
export const stopSpinner = createAction(STOP_SPINNER);


export default handleActions({

  [CREATE_USER_SUCCESS]: (state, action) => ({
    ...state,
    registrationRequestStatus: 'success',
  }),

  [CREATE_USER_FAILURE]: (state, action) => ({
    ...state,
    registrationRequestStatus: 'failure',
  }),

  [SET_LOGIN_STATUS]: (state, action) => ({
    ...state,
    loginRequestStatus: action.payload,
  }),

  [CLEAR_ERRORS]: (state, action) => ({
    ...state,
    registrationRequestStatus: null,
    loginRequestStatus: null,
  }),

  [START_SPINNER]: (state, action) => ({
    ...state,
    isLoading: true,
  }),

  [STOP_SPINNER]: (state, action) => ({
    ...state,
    isLoading: false,
  }),

}, INITIAL_STATE);

