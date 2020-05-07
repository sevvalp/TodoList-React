import { combineReducers } from "redux";

const defaultTodoList = [
  {
    name: "Pet Ghost",
    check: false,
  },
  {
    name: "Go beyond the wall",
    check: false,
  },
];

export const todosReducer = (state = defaultTodoList, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          name: action.payload,
          check: false,
        },
      ];

    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.name === action.payload.name
          ? { name: todo.name, check: !todo.check }
          : todo
      );

    case "REMOVE_TODO":
      return state.filter((todo) => todo.name !== action.payload.name);
    default:
      return state;
  }
};

export default combineReducers({
  todos: todosReducer,
});
