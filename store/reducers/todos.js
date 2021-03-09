import { ADD_TODOS, GET_TODOS, MARK_AS_COMPLETE } from "../actions/todos";

const initialState = {
  todos: []
}

const todosReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_TODOS:
      const updatedTodos = [...state.todos, action.payload];
      return {
        ...state,
        todos: updatedTodos
      }
    
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload
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