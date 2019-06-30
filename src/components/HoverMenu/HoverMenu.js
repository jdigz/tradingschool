// React
import React from "react";

// Style
import './HoverMenu.css';

// Material UI
import Button from "@material-ui/core/Button";

function HoverMenu(props) {

  /* Adding close on click to the passed in menu items */
  const modifiedChildren = React.Children.map(props.children, child => {
    return React.cloneElement(child)
  })
  
  return (
    <div className={"dropdown" }>
      <Button className="dropbtn">{props.title}</Button>
      <div className="dropdown-content">
        {modifiedChildren}
      </div>
    </div>
  );
}

export default HoverMenu;
