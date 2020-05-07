import React from "react";
import { connect } from "react-redux";
import { toggleTodo, removeTodo } from "../actions";
import "./ListItem.css";

const ListItem = ({ item, toggleTodo, removeTodo }) => {
  return (
    <div>
      <li className={item.check ? "check" : "item"}>
        <span className="list-item" onClick={() => toggleTodo(item)}>
          {item.name}
        </span>
        <span>
          <i onClick={() => removeTodo(item)} className="trash icon"></i>
        </span>
      </li>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    toggleTodo: state.toggleTodo,
    removeTodo: state.removeTodo,
  };
};

export default connect(mapStateToProps, {
  toggleTodo,
  removeTodo,
})(ListItem);
