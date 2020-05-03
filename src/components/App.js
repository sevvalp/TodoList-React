import React from 'react';
import InputBar from './InputBar';
import TodoList from './TodoList';

const defaultTodoList = ["Feed the Dragons", "Burn King's Landing"];
class App extends React.Component {
    state = { todos: defaultTodoList };

    componentDidMount() {
        //this.onTermSubmit(defaultTodoList);
    }

    onTermSubmit = (term) => {
        this.setState({ todos: [...this.state.todos, term] });
    }

    render() {
        console.log(this.state.todos);
        return (
        <div className="ui container">
            <InputBar onSubmit={this.onTermSubmit}/>
            <TodoList items={this.state.todos} removeTodo={this.removeTodo}/>
        </div>
        )
    }
}

export default App;
