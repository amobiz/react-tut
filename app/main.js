import React from 'react';
import {render} from 'react-dom';
import HelloWorld from './helloworld.js'

setInterval(() => {
	render(
        <HelloWorld date={new Date()} />,
        document.getElementById('example')
    );
}, 500);
