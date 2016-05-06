import React from 'react';
import {render} from 'react-dom';
import HelloWorld from './helloworld.js'

render(
    <HelloWorld date={new Date()} />,
    document.getElementById('example')
);
