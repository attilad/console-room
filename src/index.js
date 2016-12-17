import React from 'react';
import {render} from 'react-dom';
import HomePage from './containers/HomePage';

render(
  <HomePage helloWorld="Hello, Universe!" />, document.getElementById('app')
);
