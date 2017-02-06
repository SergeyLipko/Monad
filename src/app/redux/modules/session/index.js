import { createAction, handleActions } from 'redux-actions';

const INITIAL_STATE = {
  isAuthenticated: false,
  authenticatedUser: null,
  registrationStatus: null,
  isLoading: false,
};


export const CREATE_USER = 'session/CREATE_USER';
export const createUser = createAction(CREATE_USER);

export const CREATE_USER_SUCCESS = 'session/CREATE_USER_SUCCESS';
export const createUserSuccess = createAction(CREATE_USER_SUCCESS);

export const CREATE_USER_FAILURE = 'session/CREATE_USER_FAILURE';
export const createUserFailure = createAction(CREATE_USER_FAILURE);

export const CLEAR_ERRORS = 'session/CLEAR_ERRORS';
export const clearErrors = createAction(CLEAR_ERRORS);

export const START_SPINNER = 'session/START_SPINNER';
export const startSpinner = createAction(START_SPINNER);

export const STOP_SPINNER = 'session/STOP_SPINNER';
export const stopSpinner = createAction(STOP_SPINNER);


export default handleActions({

  [CREATE_USER_SUCCESS]: (state, action) => ({
    ...state,
    registrationStatus: 'success',
  }),

  [CREATE_USER_FAILURE]: (state, action) => ({
    ...state,
    registrationStatus: 'failure',
  }),

  [CLEAR_ERRORS]: (state, action) => ({
    ...state,
    registrationStatus: null,
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

