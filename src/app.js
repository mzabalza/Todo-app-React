
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

// To make sure We see same output in different browser we reset the default styles 
import 'normalize.css/normalize.css'
import './styles/styles.scss';

// Render a React element into the DOM in the supplied container
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
