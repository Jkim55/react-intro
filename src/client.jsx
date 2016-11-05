// const React = require('react')  // ln 1 & 2 is ES6 syntax for ln 3
// const PropTypes = require('react').PropTypes
import React, { PropTypes } from 'react';
// const ReactDOM = require('react-dom') // ln4 ES6 syntax for ln 5
import ReactDOM from 'react-dom';

import Cat from './cats';

const catMeow = new Cat('Garfield').meow();

// this is a react component
const App = props => (
  <div>
    The cat says: {props.message} and {props.hello}
  </div>
);

App.propTypes = {
  message: PropTypes.string.isRequired,
  hello: PropTypes.string.isRequired,
};

ReactDOM.render(<App message={catMeow} hello={'hiss'} />, document.querySelector('.app'));
