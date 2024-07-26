import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram
 } from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    icon: faFacebook,
    url: "https://facebook.com",
  },
  {
    icon: faTwitter,
    url: "https://x.com",
  },
  {
    icon: faInstagram,
    url: "https://instagram.com"
  }
 ];

function Footer() {
  return (
    <footer className="footer">
      <div className="links">
        <h3>Little Lemon</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
        </ul>
      </div>
      <div className="contact">
        <h3>Contact</h3>
        <p>553 S Forrestville Ave Chicago, IL</p>
        <p>(773) 864 - 1553</p>
        <p>littlelemon@gmail.com</p>
      </div>
      <div className="socials">
        <h3>Social Media Links</h3>
        {socials.map(({ icon, url }) => (
               <a className="media-link"
                 key={url}
                 href={url}
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <FontAwesomeIcon icon={icon} size="2x" key={url} />
               </a>
             ))}
      </div>
    </footer>
  );
}

export default Footer;
