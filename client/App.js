/**
 * Root Component
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

// Import Routes
import routes from './routes';

// Base stylesheet
require('./main.css');

export class App extends Component {
  constructor(props) {
    console.log(props);
    super(props);
  }

  componentDidMount() {
    // removing server side injected css after avoiding flickering
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }
  render() {
    const generateClassName = createGenerateClassName();
    const jss = create({
      ...jssPreset(),
      // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
      insertionPoint: document.getElementById('jss-insertion-point'),
    });

    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <Provider store={this.props.store}>
          <Router history={browserHistory}>
            {routes}
          </Router>
        </Provider>
      </JssProvider>
    );
  }
}


App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
