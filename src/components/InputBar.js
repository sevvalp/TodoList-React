import React from 'react';

class InputBar extends React.Component {
    state = { term: '' };

    onInputChange = event => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = event => {
        console.log(this.props);
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="ui input">
                    <input type="text" value={this.state.term} onChange={this.onInputChange} />
                </div>
            </form>  
        );
    }
}

export default InputBar;
