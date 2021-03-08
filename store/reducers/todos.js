import { ADD_TODOS, MARK_AS_COMPLETE } from "../actions/todos";

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
    case MARK_AS_COMPLETE:
      const markedTodos = state.todos.map(todo => {
        if (todo.id == action.payload) {
          todo.isComplete = true;
        }
        return todo;
      })

      return {
        ...state,
        todos: markedTodos
      }
    default:
      return state
  }
}

export default todosReducer;