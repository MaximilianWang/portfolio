import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

class SplashPage extends Component {
  constructor(props) {
    super(props);
    this.state = { isFirst: true };
  }

  render() {
    return (
      <div>
        <p>Yo</p>
      </div>
    );
  }
}

SplashPage.contextTypes = {
  router: PropTypes.object,
};
/*
function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(SplashPage);
*/
