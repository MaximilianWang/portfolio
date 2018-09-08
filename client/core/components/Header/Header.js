import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// Import Style


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },

  toolbarTitle: {
    flex: 1,
  },
});

class Header extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };


  render() {
    const { classes } = this.props;
    // const { value } = this.state;

    return (
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.toolbarTitle}>
            <Button
              align="left"
              size="large"
            >All Maxed Out</Button>
          </Typography>

          <Button variant="outlined" size="small">
            About
          </Button>
          <Button variant="outlined" size="small">
            Resume
          </Button>
          <Button variant="outlined" size="small">
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

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);

