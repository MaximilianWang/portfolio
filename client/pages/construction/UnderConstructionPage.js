import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Build from '@material-ui/icons/Build';


export class UnderConstructionPage extends Component {
    constructor(props) {
        super(props);
        this.state = { isFirst: true };
    }

    render() {
        return (
            <React.Fragment>
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    direction="column"
                >
                    <Build />
                    <h1>Page Under Construction</h1>

                </Grid>
            </React.Fragment>
        );
    }
}

export default UnderConstructionPage;

