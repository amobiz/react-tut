import React, {Component} from 'react';

export default class HelloWorld extends Component {
    constructor() {
        super();
        this.state = {
            name: 'guest'
        }
    }

    render () {
        return (
            <p>
                Hello, <input type="text" placeholder="Your name here" value={this.state.name} />!
                It is {this.props.date.toTimeString()}
            </p>
        );
    }
};
