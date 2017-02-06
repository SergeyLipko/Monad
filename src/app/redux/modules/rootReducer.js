import {combineReducers} from 'redux';
import session from './session';
import notes from './notes';

export default combineReducers({
  session,
  notes,
})
