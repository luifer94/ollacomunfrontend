import React from 'react';
import ReactDOM from 'react-dom';
import RoutedApp from './router';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';


import configApiMockup from "./api/mockup/setup";
configApiMockup();

ReactDOM.render((
  <RoutedApp />
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
