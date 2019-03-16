import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import "./HoverMenu.css";

const styles = theme => ({
  root: {
    zIndex: theme.zIndex.hoverMenu,
  },
});

const timeoutLength = 400;

class HoverMenu extends React.Component {
  /** State Values */
  state = {
    /** Menu Anchor location */
    anchorEl: null,

    /* Keep track of whether the mouse is over the button or menu */
    mouseOverButton: false,
    mouseOverMenu: false
  };

  /** Functions */
  /** Ensures that if the user can somehow click the button it still functions properly */
  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };
  /**  Clears mouseOverButton states*/
  handleClose = () => {
    this.setState({ mouseOverButton: false, mouseOverMenu: false, open: false, });
  };
  enterButton = event => {
    this.setState({ mouseOverButton: true, anchorEl: event.currentTarget });
  };
  leaveButton = () => {
    setTimeout(() => {
      this.setState({ mouseOverButton: false });
    }, timeoutLength);
  };
  enterMenu = () => {
    this.setState({ mouseOverMenu: true });
  };
  leaveMenu = () => {
    setTimeout(() => {
      this.setState({ mouseOverMenu: false });
    }, timeoutLength);
  };

  render() {
    const { classes, className: classNameProp, ...other } = this.props;
    const { anchorEl } = this.state;

    /* Adding close on click to the passed in menu items */
    const modifiedChildren = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        onClick: this.handleClose
      })
    })

    /* Calculate open state based on mouse location */
    const open = this.state.mouseOverButton || this.state.mouseOverMenu || this.state.open;

    const className = classNames(
      classes.root,
      classNameProp,
    );

    return (
      <div>
        <Button
          className={className}
          aria-owns={this.state.open ? "simple-menu" : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          onMouseEnter={this.enterButton}
          onMouseLeave={this.leaveButton}
          {...other}
        >
          {this.props.title}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          getContentAnchorEl={null}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={open}
          onClose={this.handleClose}
          MenuListProps={{onMouseEnter: this.enterMenu, onMouseLeave: this.leaveMenu}}
        >
          {modifiedChildren}
        </Menu>
      </div>
    );
  }
}

HoverMenu.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
};

export default withStyles(styles)(HoverMenu);
