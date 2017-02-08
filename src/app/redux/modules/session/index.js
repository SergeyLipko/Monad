import { createAction, handleActions } from 'redux-actions';

const INITIAL_STATE = {
  sessionStatus: null,
  isAuthenticated: false,
  authenticatedUser: null,
  isLoading: false,
};


/*
* Use one setSessionStatus action for handle error status for both:
* user creation and log in
* */
export const SET_SESSION_STATUS = 'session/SET_SESSION_STATUS';
export const setSessionStatus = createAction(SET_SESSION_STATUS);


export const CREATE_USER = 'session/CREATE_USER';
export const createUser = createAction(CREATE_USER);

export const LOGIN_USER_REQUEST = 'session/LOGIN_USER_REQUEST';
export const loginUserRequest = createAction(LOGIN_USER_REQUEST);

export const CLEAR_SESSION_STATUS = 'session/CLEAR_SESSION_STATUS';
export const clearSessionStatus = createAction(CLEAR_SESSION_STATUS);

export const START_SPINNER = 'session/START_SPINNER';
export const startSpinner = createAction(START_SPINNER);

export const STOP_SPINNER = 'session/STOP_SPINNER';
export const stopSpinner = createAction(STOP_SPINNER);


export default handleActions({

  [SET_SESSION_STATUS]: (state, action) => ({
    ...state,
    sessionStatus: action.payload,
  }),

  [CLEAR_SESSION_STATUS]: (state, action) => ({
    ...state,
    sessionStatus: null,
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

