/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import app from './core/App';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

// routing the various pages of the webpage
export default (
  <Route path="/" component={app}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./splash/SplashPage').default);
        });
      }}
    />
    <Route
      path="/about"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./about/About').default);
        });
      }}
    />
  </Route>

);
