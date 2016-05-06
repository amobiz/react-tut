import React, {Component} from 'react';

export default class HelloWorld extends Component {
    render () {
        return (
            <p>
                Hello, <input type="text" placeholder="Your name here" value="guest" />!
                It is {this.props.date.toTimeString()}
            </p>
        );
    }
};
