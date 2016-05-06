import React, {Component} from 'react';

export default class HelloWorld extends Component {
    constructor() {
        super();
        this.state = {
            name: 'guest'
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render () {
        return (
            <p>
                Hello, <input type='text' placeholder='Your name here' name='name' value={this.state.name} onChange={this.handleChange.bind(this)} />!
                It is {this.props.date.toTimeString()}
            </p>
        );
    }
};
