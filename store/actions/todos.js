export const getTodos = () => {
  return {
    type: 'GET_TODOS',
  }
}

export const markAsFav = (todo) => {
  return {
    type: 'MARK_FAV',
    payload:todo
  }
}

