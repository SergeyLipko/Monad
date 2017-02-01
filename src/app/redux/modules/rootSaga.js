import { fork } from 'redux-saga/effects';
import notes from './notes/sagas';

const forkEm = saga => fork(saga);

export default function * rootSaga(){
  yield [
    ...notes,
  ].map(forkEm)
}