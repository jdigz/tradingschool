import React, { Component } from 'react';
import {AppBar, Typography, Toolbar, IconButton, SvgIcon, Menu, MenuItem} from '@material-ui/core';
import {MenuIcon} from '@material-ui/icons/Menu'
import logo from '../media/logo.png';

class NavBar extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <AppBar color="default" position="sticky">
        <Toolbar>
          <IconButton>
            <SvgIcon>
              <img src={logo} alt="TradeSchool-logo" width="100" height="50"/>
            </SvgIcon>
          </IconButton>
          <Typography varaint="h6" color="inherit">
            TradeSchool
          </Typography>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem>Something</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    )
  }
}
export default NavBar;