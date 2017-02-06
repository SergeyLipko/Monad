import { fork } from 'redux-saga/effects';
import session from './session/sagas';
import notes from './notes/sagas';

const forkEm = saga => fork(saga);

export default function * rootSaga(){
  yield [
    ...session,
    ...notes,
  ].map(forkEm)
}