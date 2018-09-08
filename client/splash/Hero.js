import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
// Import Style
import styles from './Hero.css';
import mainPic from './fake_portfolio.jpg';

class Hero extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };


    render() {
        return (
            <React.Fragment>
                <Avatar
                    alt="Di Wang"
                    src={mainPic}
                    className={classNames(styles.hero)}
                />
                <h1>Eccentric developer extradinaire!</h1>
            </React.Fragment>
        );
    }
    /*
    old_render() {
      const { classes } = this.props;
      const { value } = this.state;
      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Button component={Link} to="/">
              allMaxedOut
            </Button>
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" href="#basic-tabs" />
            </Tabs>
          </AppBar>
        </div>
      );
    }
    */
}

export default withStyles(styles)(Hero);

