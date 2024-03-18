import React from 'react';
import { DEFAULT_SOCIAL_MEDIA } from '../../utills/constants';

import './Footer.css';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="links-wrapper">
        {DEFAULT_SOCIAL_MEDIA.map((socialMedia) => {
          return (
            <a
              className="social-links"
              key={socialMedia.id}
              href={socialMedia.link}
            >
              {socialMedia.title}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
