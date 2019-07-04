import React from 'react';
import './Footer.css';
import FacebookIcon from '../Icons/FacebookIcon/FacebookIcon';
import LinkedInIcon from '../Icons/LinkedInIcon/LinkedInIcon';
import GitHubIcon from '../Icons/GitHubIcon/GitHubIcon';
import { Box } from '@material-ui/core';

function Footer(props) {
  return (
    <Box bgcolor='primary.main'>
      <div className="container space-t space-b">
        <nav className='menu-bar flexb'>
          <ul>
            <li><a href='test.txt' className='footer footer-big-link'>About</a></li>
            <li><a href='test.txt' className='footer footer-big-link'>References</a></li>
            <li><a href='test.txt' className='footer footer-big-link'>Contact</a></li>
            <li><a href='test.txt' className='footer footer-big-link'>Hire</a></li>
          </ul>
        </nav>
      </div>
      <Box bgcolor='primary.main' className="space-t space-b">
        <div className='container dark-green linksContainer'>
          <ul className='mb-sm'>
            <li className='contact-link'><a className='footer' href='https://github.com/jdigz'><GitHubIcon width={32}/></a></li>
            <li className='contact-link'><a className='footer' href='https://www.linkedin.com/in/joseph-digregorio-97907260/'><LinkedInIcon width={32}/></a></li>
            <li className='contact-link'><a className='footer' href='https://www.facebook.com/joedigz'><FacebookIcon width={32}/></a></li>
          </ul>
          <div className='font-mono text-xs'>Webpage Created by Joseph "JDiGz" DiGregorio</div>
          <div className='font-mono text-xs'>Icons made by
            <a className='footer' href="https://www.freepik.com/" title="Freepik"> Freepik </a>and 
            <a className='footer' href="https://www.flaticon.com/authors/gregor-cresnar"> Gregor Cresnar </a>from
            <a className='footer' href="https://www.flaticon.com/" title="Flaticon"> Flaticon.com</a> licensed by
            <a className='footer' href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"> CC 3.0 BY</a>
          </div>
        </div>
      </Box>
    </Box>
  )
}

export default Footer;