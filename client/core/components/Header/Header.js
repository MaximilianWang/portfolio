import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './Header.css';
import { Link } from 'react-router';
// Import Style

class Header extends React.Component {
  state = {
    value: 0,
  };

  handlePageNavigateClick = (event, value) => {
  };


  render() {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit" className={styles.toolbarTitle}>
            <Button
              component={Link}
              to="/"
              align="left"
              size="large"
            >All Maxed Out</Button>
          </Typography>

          <Button component={Link} to="/about" variant="outlined" size="small">
            About
          </Button>
          <Button component={Link} to="/resume" variant="outlined" size="small">
            Resume
          </Button>
          <Button component={Link} to="/blog" variant="outlined" size="small">
            Blog
          </Button>
          <Button variant="outlined" size="small">
            Contact Me
          </Button>

        </Toolbar>
      </AppBar>
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

export default Header;

