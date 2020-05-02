import React from 'react';
import ListItem from './ListItem';

const TodoList = ({items}) => {
    const renderedList = items.map((item) => {
        return <ListItem item={item}/>;
    });
    return <div>{renderedList}</div>;
}

export default TodoList;