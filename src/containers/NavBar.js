import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import NoSsr from '@material-ui/core/NoSsr';
import Typography from '@material-ui/core/Typography';
import HoverMenu from '../components/HoverMenu';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import TrandingUpIcon from '@material-ui/icons/TrendingUp';

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
  },
  firstButton: {
    marginLeft: 100,
    marginRight: 100,
  },
  push: {
    alignSelf: 'flex-end',
  }
});

class NavBar extends React.Component {
  state = {
    anchorEl: null,
  };

  showMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  hideMenu = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <NoSsr>
      <div>
        <AppBar title="TradeSchool" color="default" position="sticky">
          <Toolbar>
            <Grid container classes={classes.root} direction='row' wrap='nowrap'>
              <Grid item xs={0}>
                <TrandingUpIcon nativeColor='green' fontSize='large' />
              </Grid>
              <Hidden xsDown>
                <Grid item xs={1} justify='center'>
                  <Typography variant="h6" color="inherit" align='center'>
                    TradeSchool
                  </Typography>
                </Grid>
              </Hidden>
              <Grid item xs={4} align='right'>
                <HoverMenu title='Academy'>
                  <MenuItem >Day Trading</MenuItem>
                  <MenuItem >Swing Trading</MenuItem>
                  <MenuItem >Candlestick Patterns</MenuItem>
                  <MenuItem >Indicators</MenuItem>
                </HoverMenu>
              </Grid>
              <Grid item xs='auto'>
                  <HoverMenu title='Social'>
                    <MenuItem >Blog</MenuItem>
                    <MenuItem >Chatroom</MenuItem>
                    <MenuItem >Forums</MenuItem>
                  </HoverMenu>
              </Grid>
              <Grid item xs='auto' align='right'>
                  <HoverMenu title='Support'>
                    <MenuItem >About Us</MenuItem>
                    <MenuItem >Help</MenuItem>
                    <MenuItem >FAQ</MenuItem>
                    <MenuItem >Contact Us</MenuItem>
                  </HoverMenu>
              </Grid>
              <Grid item xs={6} align='right'>
                  <Button
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.showMenu}
                  >
                    <MenuIcon/>
                  </Button>
              </Grid>
            </Grid>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.hideMenu}
            >
              <MenuItem onClick={this.hideMenu}>Account</MenuItem>
              <MenuItem onClick={this.hideMenu}>Swing Trading</MenuItem>
              <MenuItem onClick={this.hideMenu}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
      </NoSsr>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);

