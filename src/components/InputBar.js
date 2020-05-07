import React, { useState } from "react";
import { addTodo } from "../actions";
import { connect } from "react-redux";

const InputBar = ({ addTodo }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(term);
    addTodo(term);
    setTerm("");
  };

  return (
    <form onSubmit={onFormSubmit} className="ui form">
      <div className="ui input">
        <input
          type="text"
          value={term}
          placeholder="Add new todo"
          onChange={onInputChange}
        />
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return { addTodo: state.addTodo };
};

export default connect(mapStateToProps, { addTodo })(InputBar);
