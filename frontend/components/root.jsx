import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SplashContainer from './splash/splash_container'

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route component={ App } >
        <Route path='/' component={SplashContainer}>

        </Route>
      </Route>
    </Router>
  </Provider>
);

export default Root;