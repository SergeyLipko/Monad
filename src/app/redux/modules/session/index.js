import { createAction, handleActions } from 'redux-actions';

const INITIAL_STATE = {
  sessionErrors: null,
  authenticatedUser: null,
  isAuthenticated: false,
  isLoading: false,
};


export const CREATE_USER = 'session/CREATE_USER';
export const createUser = createAction(CREATE_USER);

export const LOGIN_USER_REQUEST = 'session/LOGIN_USER_REQUEST';
export const loginUserRequest = createAction(LOGIN_USER_REQUEST);

export const SET_USER = 'session/SET_USER';
export const setUser = createAction(SET_USER);

/*
 * Use one setSessionErrors action for handle error status for both:
 * user creation and log in
 * */
export const SET_SESSION_ERRORS = 'session/SET_SESSION_ERRORS';
export const setSessionErrors = createAction(SET_SESSION_ERRORS);

export const CLEAR_SESSION_ERRORS = 'session/CLEAR_SESSION_ERRORS';
export const clearSessionErrors = createAction(CLEAR_SESSION_ERRORS);

export const START_SPINNER = 'session/START_SPINNER';
export const startSpinner = createAction(START_SPINNER);

export const STOP_SPINNER = 'session/STOP_SPINNER';
export const stopSpinner = createAction(STOP_SPINNER);



export default handleActions({

  [SET_USER]: (state, action) => ({
    ...state,
    authenticatedUser: action.payload,
  }),

  [SET_SESSION_ERRORS]: (state, action) => ({
    ...state,
    sessionErrors: action.payload,
  }),

  [CLEAR_SESSION_ERRORS]: (state, action) => ({
    ...state,
    sessionErrors: null,
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

