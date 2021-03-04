import { combineReducers } from 'redux'
import todosReducer from './todos'

const reducers = combineReducers({
  todos: todosReducer
})

export default reducers;