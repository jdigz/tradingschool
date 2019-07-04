import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import HoverMenu from '../HoverMenu';
import { AppBar, Grid, Hidden, MenuItem, Toolbar, Typography, Divider, } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import TrendingUpIcon from '@material-ui/icons/TrendingUp/';

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: '64px',
    marginBottom: '10px',
  },
  menuContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'left',
  },
  m75: {
    paddingLeft: 75,
    paddingRight: 75,
  },
  m25r: {
    paddingRight: 25,
  },
  push: {
    display: 'flex',
    justifyContent: 'right',
  },
});

class NavBar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppBar title="TradeSchool" color="primary" position="fixed">
          <Toolbar>
            <Grid container className={classes.root} direction='row' wrap='nowrap' alignItems='flex-end'>
              <Grid item xs={3}>
                <ul className={classes.iconContainer}>  
                  <TrendingUpIcon className={classes.m25r} fontSize='large'/>
                  <Hidden smDown>
                    <Typography variant="h6" align='left'>TradeSchool</Typography>
                  </Hidden>
                </ul>
              </Grid>
              <Hidden xsDown>
                <Grid item xs={6}>
                  <ul className={classes.menuContainer}>
                      <HoverMenu className={classes.m75} title='Academy'>
                        <MenuItem><NavLink to={`${process.env.PUBLIC_URL}/`}>Day Trading</NavLink></MenuItem>
                        <MenuItem><NavLink to={`${process.env.PUBLIC_URL}/`}>Swing Trading</NavLink></MenuItem>
                        <MenuItem><NavLink to={`${process.env.PUBLIC_URL}/`}>Candlestick Patterns</NavLink></MenuItem>
                        <MenuItem><NavLink to={`${process.env.PUBLIC_URL}/`}>Indicators</NavLink></MenuItem>
                      </HoverMenu>
                      <HoverMenu className={classes.m75} title='Social'>
                        <MenuItem><NavLink to={`${process.env.PUBLIC_URL}/`}>Blog</NavLink></MenuItem>
                        <MenuItem><NavLink to={`${process.env.PUBLIC_URL}/`}>Chatroom</NavLink></MenuItem>
                        <MenuItem><NavLink to={`${process.env.PUBLIC_URL}/`}>Forums</NavLink></MenuItem>
                      </HoverMenu>
                      <HoverMenu className={classes.m75} title='Support'>
                        <MenuItem><NavLink to={`${process.env.PUBLIC_URL}/`}>About Us</NavLink></MenuItem>
                        <MenuItem><NavLink to={`${process.env.PUBLIC_URL}/`}>FAQ</NavLink></MenuItem>
                        <MenuItem><NavLink to={`${process.env.PUBLIC_URL}/`}>Contact Us</NavLink></MenuItem>
                      </HoverMenu>
                  </ul>
                </Grid>
              </Hidden>
              <Hidden smUp>
                <Grid item xs={6} >
                  <div className={classes.menuContainer}>
                  <HoverMenu title='Menu'>
                      <MenuItem><NavLink to={`${process.env.PUBLIC_URL}/`}>Day Trading</NavLink></MenuItem>
                      <MenuItem><NavLink to={`${process.env.PUBLIC_URL}/`}>Swing Trading</NavLink></MenuItem>
                      <MenuItem><NavLink to={`${process.env.PUBLIC_URL}/`}>Candlestick Patterns</NavLink></MenuItem>
                      <MenuItem><NavLink to={`${process.env.PUBLIC_URL}/`}>Indicators</NavLink></MenuItem>
                    <Divider />
                      <MenuItem><NavLink to={`${process.env.PUBLIC_URL}/`}>Blog</NavLink></MenuItem>
                      <MenuItem><NavLink to={`${process.env.PUBLIC_URL}/`}>Chatroom</NavLink></MenuItem>
                      <MenuItem><NavLink to={`${process.env.PUBLIC_URL}/`}>Forums</NavLink></MenuItem>
                    <Divider />
                      <MenuItem><NavLink to={`${process.env.PUBLIC_URL}/`}>About Us</NavLink></MenuItem>
                      <MenuItem><NavLink to={`${process.env.PUBLIC_URL}/`}>FAQ</NavLink></MenuItem>
                      <MenuItem><NavLink to={`${process.env.PUBLIC_URL}/`}>Contact Us</NavLink></MenuItem>
                  </HoverMenu>
                  </div>
                </Grid>
              </Hidden>
              <Grid item xs={3} className={classes.push}>
                <HoverMenu title={<MenuIcon/>}>
                  <MenuItem><NavLink to={`${process.env.PUBLIC_URL}/`}>Account</NavLink></MenuItem>
                  <MenuItem><NavLink to={`${process.env.PUBLIC_URL}/`}>Logout</NavLink></MenuItem>
                </HoverMenu>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);

