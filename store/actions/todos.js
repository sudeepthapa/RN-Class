import axios from 'axios';
// Actions Types
export const ADD_TODOS = "ADD_TODOS";
export const GET_TODOS = "GET_TODOS";
export const CHANGE_PRIORITY = "CHANGE_PRIORITY";
export const MARK_AS_COMPLETE = "MARK_AS_COMPLETE";
const BASE_URL = "https://react-native-8e12e-default-rtdb.firebaseio.com";


// Action Generators

const addTodos = (todo) => ({
  type: ADD_TODOS,
  payload: todo
})

const getTodos = (todos) => ({
  type: GET_TODOS,
  payload: todos
})

const markAsComplete = (todoId) => ({
  type: MARK_AS_COMPLETE,
  payload: todoId
})

// Actions

export const addTodosToFirebase = todo => async (dispatch, getState) => {
  const baseUrl = getState().configState.baseURL
  const response = await axios.post(`${baseUrl}/todos.json`, todo);
  todo.id = response.data.name;
  dispatch(addTodos(todo))
}

export const markTodoAsComplete = (todoId) => async dispatch => {
  const response = await axios.patch(`${BASE_URL}/todos/${todoId}.json`, { isComplete: true });
  dispatch(markAsComplete(todoId));
}

export const getAllTodos = () => {
  return async (dispatch) => {
    const response = await axios.get(`${BASE_URL}/todos.json`);
    console.log("BEFORE", response.data)

    const allTodoIds = Object.keys(response.data)
    const todos = allTodoIds.map(id => {
      const todo = response.data[id];
      todo['id'] = id
      return todo
    })
    
    dispatch(getTodos(todos))
  }
}

