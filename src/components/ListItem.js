import React from "react";
import "./ListItem.css";

const ListItem = ({ item, toggleActive, removeTodo }) => {
  return (
    <div>
      <li className={item.check ? "check item" : "item"}>
        <span onClick={() => toggleActive(item.name)}>{item.name}</span>
        <span>
          <i onClick={() => removeTodo(item.name)} className="trash icon"></i>
        </span>
      </li>
    </div>
  );
};

export default ListItem;
