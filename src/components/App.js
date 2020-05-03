import React from "react";
import InputBar from "./InputBar";
import TodoList from "./TodoList";

const defaultTodoList = [
  {
    name: "Feed the Dragons",
    check: false,
  },
  {
    name: "Burn King's Landing",
    check: false,
  },
];
class App extends React.Component {
  state = { todos: defaultTodoList };

  componentDidMount() {
    //this.onTermSubmit(defaultTodoList);
  }

  onTermSubmit = (term) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          name: term,
          check: false,
        },
      ],
    });
  };

  removeTodo = (name) => {
    this.setState({
      todos: this.state.todos.filter((x) => x.name !== name),
    });
  };

  toggleActive = (name) => {
    const old_todos = [...this.state.todos];
    old_todos.map((element) => {
      if (element && element.name === name) {
        element.check = !element.check;
      }
    });
    this.setState({ todos: old_todos });
  };

  render() {
    return (
      <div className="ui container">
        <InputBar onSubmit={this.onTermSubmit} />
        <TodoList
          items={this.state.todos}
          removeTodo={this.removeTodo}
          toggleActive={this.toggleActive}
        />
      </div>
    );
  }
}

export default App;
