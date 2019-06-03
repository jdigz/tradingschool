import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import './Footer.css';

const styles = theme => ({
  root: {
    flexGrow:1,
  },
});

function Footer(props) {
  const { classes } = props;
  return (
    <div className='bg-black'>
      <div className="container gutter space-t space-b">
        <nav className='menu-bar'>
          <ul>
            <li><a href='test.txt' className='footer-big-link'>About</a></li>
            <li><a href='test.txt' className='footer-big-link'>References</a></li>
            <li><a href='test.txt' className='footer-big-link'>Contact</a></li>
            <li><a href='test.txt' className='footer-big-link'>Hire</a></li>
          </ul>
        </nav>
      </div>
      <div className="bg-black space-t space-b">
        <div className='container gutter dark-green '>
          <ul className='mb-sm'>
            <li className='contact-link'><a href='test.txt'>Github</a></li>
            <li className='contact-link'><a href='test.txt'>LinkedIn</a></li>
            <li className='contact-link'><a href='test.txt'>Facebook</a></li>
            <li className='contact-link'><a href='test.txt'>Resume</a></li>
          </ul>
          <div className='font-mono text-xs'>Webpage Created by Joseph "JDiGz" DiGregorio</div>
        </div>
      </div>
    </div>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);