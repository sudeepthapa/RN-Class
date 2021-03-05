import { combineReducers } from 'redux';
import todosReducer from './todos';

const reducers = combineReducers({
  todosState: todosReducer
})

export default reducers;