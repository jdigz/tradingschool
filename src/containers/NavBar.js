import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../components/Logo';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

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

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class NavBar extends React.Component {
  state = {
    anchorEl: null,
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl, value } = this.state;

    return (
      <NoSsr>
      <div className={classes.root}>
        <AppBar title="TradeSchool" color="default" position="sticky">
          <Toolbar>
            <Logo />
            <Typography variant="h6" color="inherit">
              TradeSchool
            </Typography>
            <Tabs
              className={classes.root}
              centered={true}
              TabIndicatorProps={{ // the following is an example of how to override the tabIndicator
                style: {
                  backgroundColor: "#000"
                }
              }}
              value={value}
              onChange={this.handleChange} >
              <LinkTab label="Academy" href="academy" props={classes.tabRoot} />
              <LinkTab label="Social" href="social" />
              <LinkTab label="Support" href="support" />
            </Tabs>
            <Button
              aria-owns={anchorEl ? 'simple-menu' : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <MenuIcon/>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleClose}>My account</MenuItem>
              <MenuItem onClick={this.handleClose}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
          {value === 0 && <TabContainer>Page One</TabContainer>}
          {value === 1 && <TabContainer>Page Two</TabContainer>}
          {value === 2 && <TabContainer>Page Three</TabContainer>}
      </div>
      </NoSsr>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);

