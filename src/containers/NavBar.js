import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from '../components/Logo';
import Menu from '@material-ui/icons/Menu';
import { MenuItem } from '@material-ui/core';
import PopupMenu from '../components/PopupMenu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 2,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar color="default" position="sticky">
        <Toolbar>
          <Logo />
          <Typography variant="h6" color="inherit" className={classes.grow}>
            TradeSchool
            <PopupMenu className={classes.MenuButton}/>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);