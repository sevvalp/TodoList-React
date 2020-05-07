import React from "react";
import InputBar from "./InputBar";
import TodoList from "./TodoList";

class App extends React.Component {
  onTermSubmit = (term) => {
    if (term !== "") {
      this.setState({
        todos: [
          ...this.state.todos,
          {
            name: term,
            check: false,
          },
        ],
      });
    }
  };

  render() {
    return (
      <div className="ui container main">
        <h1>TO-DO LIST</h1>
        <InputBar />
        <TodoList />
      </div>
    );
  }
}

export default App;
