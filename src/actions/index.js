export const addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

export const toggleTodo = (todo) => {
  return {
    type: "TOGGLE_TODO",
    payload: todo,
  };
};

export const removeTodo = (todo) => {
  return {
    type: "REMOVE_TODO",
    payload: todo,
  };
};
