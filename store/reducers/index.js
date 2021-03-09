import { combineReducers } from 'redux';
import configReducer from './config';
import todosReducer from './todos';

const reducers = combineReducers({
  todosState: todosReducer,
  configState: configReducer
})

export default reducers;