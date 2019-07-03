// React
import React, { Component }  from 'react';
import PropTypes from 'prop-types';

// Styles
import withStyles from '@material-ui/core/styles/withStyles';

// Components
import HoverMenu from './components/HoverMenu';

// Material-UI
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
                    <li className={classes.m75}>
                      <HoverMenu title='Academy'>
                        <MenuItem >Day Trading</MenuItem>
                        <MenuItem >Swing Trading</MenuItem>
                        <MenuItem >Candlestick Patterns</MenuItem>
                        <MenuItem >Indicators</MenuItem>
                      </HoverMenu>
                    </li>
                    <li>
                      <HoverMenu title='Social'>
                        <MenuItem >Blog</MenuItem>
                        <MenuItem >Chatroom</MenuItem>
                        <MenuItem >Forums</MenuItem>
                      </HoverMenu>
                    </li>
                    <li className={classes.m75}>
                      <HoverMenu title='Support'>
                        <MenuItem >About Us</MenuItem>
                        <MenuItem >FAQ</MenuItem>
                        <MenuItem >Contact Us</MenuItem>
                      </HoverMenu>
                    </li>
                  </ul>
                </Grid>
              </Hidden>
              <Hidden smUp>
                <Grid item xs={6} >
                  <div className={classes.menuContainer}>
                  <HoverMenu title='Menu'>
                      <MenuItem >Day Trading</MenuItem>
                      <MenuItem >Swing Trading</MenuItem>
                      <MenuItem >Candlestick Patterns</MenuItem>
                      <MenuItem >Indicators</MenuItem>
                    <Divider />
                      <MenuItem >Blog</MenuItem>
                      <MenuItem >Chatroom</MenuItem>
                      <MenuItem >Forums</MenuItem>
                    <Divider />
                      <MenuItem >About Us</MenuItem>
                      <MenuItem >FAQ</MenuItem>
                      <MenuItem >Contact Us</MenuItem>
                  </HoverMenu>
                  </div>
                </Grid>
              </Hidden>
              <Grid item xs={3} className={classes.push}>
                <HoverMenu title={<MenuIcon/>}>
                  <MenuItem>Account</MenuItem>
                  <MenuItem>Logout</MenuItem>
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

