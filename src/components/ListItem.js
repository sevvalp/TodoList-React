import React from 'react';
import './ListItem.css';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active: true};
    }

        render() {
            return (
                <div>
                    <li className={this.state.active ? "item" : "check item"} onClick={ () => this.setState({active: !this.state.active})}>
                        {this.props.item}
                        <span>
                            <i onClick={this.removeTodo(this.props.item)} className="trash icon"></i>
                        </span>
                    </li>
                </div>
                );
            }; 
};

export default ListItem;