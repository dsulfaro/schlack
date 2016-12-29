import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SplashContainer from './splash/splash_container';
import DashboardContainer from './dashboard/dashboard_container';

class Root extends React.Component {

  constructor(props) {
    super(props);
    this._redirectUnlessLoggedIn = this._redirectUnlessLoggedIn.bind(this);
  }

  _redirectUnlessLoggedIn() {
    if (this.props.store.getState().session.currentUser == null) {
      hashHistory.push("/");
    }
  }

  render() {
    return (
      <Provider store={ store }>
        <Router history={ hashHistory }>
          <Route component={ App } >
            <Route path='/' component={SplashContainer} />
            <Route path='/dashboard'
                   component={DashboardContainer}
                   onEnter={this._redirectUnlessLoggedIn} />
          </Route>
        </Router>
      </Provider>
    )
  }
}

export default Root;
