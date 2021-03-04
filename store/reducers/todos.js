const initialState = {
  todos: [
    {
      id: 1,
      title: 'Hello',
    },
    {
      id: 2,
      title: 'Hello1',
    },
    {
      id: 3,
      title: 'Hello2',
    },
    {
      id: 4,
      title: 'Hello3',
    },
  ],
  favs: []
}

const todosReducer = (state = initialState, action) => {
  
  const type = action.type;
  const payload = action.payload;

  switch (action.type) {
    case 'GET_TODOS':
      return state;
    case 'MARK_FAV':
      const updatedFavs = [...state.favs, payload]
      const updatedState = {
        ...state,
        favs: updatedFavs
      }
      return updatedState;
  }

  return state;
}

export default todosReducer