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
          cb(null, require('./pages/splash/SplashPage').default);
        });
      }}
    />
    <Route
      path="/about"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./pages/about/About').default);
        });
      }}
    />
    <Route
      path="/resume"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./pages/resume/Resume').default);
        });
      }}
    />
    <Route
      path="/blog"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./pages/construction/UnderConstructionPage').default);
        });
      }}
    />
  </Route>

);
