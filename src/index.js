//console.log('Hi');
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css'; //Webpack is helping to import the css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
