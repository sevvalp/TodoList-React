import React from "react";
import { connect } from "react-redux";
import ListItem from "./ListItem";

const TodoList = ({ items }) => {
  const renderedList = items.map((item) => {
    return <ListItem item={item} />;
  });
  return <div>{renderedList}</div>;
};

const mapStateToProps = (state) => {
  return {
    items: state.todos,
  };
};

export default connect(mapStateToProps)(TodoList);
