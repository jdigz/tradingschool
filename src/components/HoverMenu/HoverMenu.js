// React
import React from "react";

// Style
import './HoverMenu.css';

// Material UI
import Button from "@material-ui/core/Button";
import { Box } from '@material-ui/core';

function HoverMenu(props) {

  /* Adding close on click to the passed in menu items */
  const modifiedChildren = React.Children.map(props.children, child => {
    return React.cloneElement(child)
  })
  
  return (
    <Box className={"dropdown"}>
      <Button color='inherit' className="dropbtn">{props.title}</Button>
      <Box bgcolor='primary.main' className="dropdown-content">
        {modifiedChildren}
      </Box>
    </Box>
  );
}

export default HoverMenu;
