import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import './Footer.css';
import Facebook from '../components/FacebookIcon';
import LinkedIn from '../components/LinkedInIcon';
import GitHub from '../components/GitHubIcon';

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
            <li className='contact-link'><a href='https://github.com/jdigz'><GitHub width={32}/></a></li>
            <li className='contact-link'><a href='https://www.linkedin.com/in/joseph-digregorio-97907260/'><LinkedIn width={32}/></a></li>
            <li className='contact-link'><a href='https://www.facebook.com/joedigz'><Facebook width={32}/></a></li>
          </ul>
          <div className='font-mono text-xs'>Webpage Created by Joseph "JDiGz" DiGregorio</div>
          <div className='font-mono text-xs'>Icons made by
            <a href="https://www.freepik.com/" title="Freepik"> Freepik</a>from
            <a href="https://www.flaticon.com/" title="Flaticon"> Flaticon.com</a> licensed by
            <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank"> CC 3.0 BY</a>
            
          </div>
        </div>
      </div>
    </div>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);