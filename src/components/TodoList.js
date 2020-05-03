import React from 'react';
import ListItem from './ListItem';

class TodoList extends React.Component {
    state={ items : this.props.items}

    removeTodo = (name) => {
        this.setState({
            todos: this.state.todos.filter(x => x !== name)
        });
    }

    render() {
        const newList=this.state.items;
        const renderedList = newList.map((item) => {
            return <ListItem item={item} removeTodo={this.removeTodo}/>;
        });
        return <div>{renderedList}</div>;
    } 
}

export default TodoList;