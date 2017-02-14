import { fork } from 'redux-saga/effects';
import session from './session/sagas';

const forkEm = saga => fork(saga);

export default function * rootSaga(){
  yield [
    ...session,
  ].map(forkEm)
}