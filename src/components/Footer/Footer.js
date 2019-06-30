// React
import React from 'react';

// Style
import './Footer.css';

// Icons
import FacebookIcon from '../Icons/FacebookIcon/FacebookIcon';
import LinkedInIcon from '../Icons/LinkedInIcon/LinkedInIcon';
import GitHubIcon from '../Icons/GitHubIcon/GitHubIcon';

function Footer(props) {
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
            <li className='contact-link'><a href='https://github.com/jdigz'><GitHubIcon width={32}/></a></li>
            <li className='contact-link'><a href='https://www.linkedin.com/in/joseph-digregorio-97907260/'><LinkedInIcon width={32}/></a></li>
            <li className='contact-link'><a href='https://www.facebook.com/joedigz'><FacebookIcon width={32}/></a></li>
          </ul>
          <div className='font-mono text-xs'>Webpage Created by Joseph "JDiGz" DiGregorio</div>
          <div className='font-mono text-xs'>Icons made by
            <a href="https://www.freepik.com/" title="Freepik"> Freepik </a>and 
            <a href="https://www.flaticon.com/authors/gregor-cresnar"> Gregor Cresnar </a>from
            <a href="https://www.flaticon.com/" title="Flaticon"> Flaticon.com</a> licensed by
            <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"> CC 3.0 BY</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;