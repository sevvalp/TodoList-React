import React from "react";
import ListItem from "./ListItem";

const TodoList = ({ items, removeTodo, toggleActive }) => {
  const renderedList = items.map((item) => {
    return (
      <ListItem
        item={item}
        key={item.name}
        toggleActive={toggleActive}
        removeTodo={removeTodo}
      />
    );
  });
  return <div>{renderedList}</div>;
};

export default TodoList;
