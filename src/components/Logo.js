import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import Button from '@material-ui/core/Button';
import logo from '../media/logo.svg';

const Logo = () => {
  return (
    <div>
      <Button>
        <SvgIcon>
          <img src={logo} alt="TradeSchool-logo" width="500" height="50"/>
        </SvgIcon>
      </Button>
    </div>
  );
}

export default Logo;