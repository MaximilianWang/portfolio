import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Hero from './Hero';
import Grid from '@material-ui/core/Grid';
import './splash.css';
import Paper from '@material-ui/core/Paper';


export class SplashPage extends Component {
  constructor(props) {
    super(props);
    this.state = { isFirst: true };
  }

  render() {
    return (
      <React.Fragment>
        <Grid container justify="center"
          alignItems="center"
          direction="column" className="splash-container">
          <Hero />
          <h1>Di "Maximilian" Wang</h1>
          <h2>I code, therefore I am.</h2>
          <p>Eccentric developer extradinaire!</p>
          <p>Brief about me here? Maybe move to resume page</p>
          <p>Linked in and google plus and other stuff</p>
        </Grid>
      </React.Fragment>
    );
  }
}

SplashPage.contextTypes = {
  router: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    useLater: state, // todo
  };
}

export default connect(mapStateToProps)(SplashPage);

