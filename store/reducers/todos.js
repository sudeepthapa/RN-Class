import { ADD_TODOS } from "../actions/todos";

const initialState = {
  todos: []
}

const todosReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_TODOS:
      const updatedTodos = [action.payload, ...state.todos];
      return {
        ...state,
        todos: updatedTodos
      }
    default:
      return state
  }
}

export default todosReducer;