/**
 * MOBILE-FIRST CONTENT:
 * 1. debtsmiths logo
 * 2. social icons
 */

import React from 'react'
import logo from '../assets/debtsmiths-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <header id="Header" className="Header">
      <img src={logo} alt="debtsmiths logo" className="Header__logo"/>
      <ul className="Header__social-nav">
        <li className="Header__social-nav__item">
          <a href="https://www.instagram.com/debtsmiths" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={['fab', 'instagram-square']}/>
          </a>
        </li>
        <li className="Header__social-nav__item">
          <a href="https://www.twitter.com/debtsmiths" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={['fab', 'twitter-square']}/>
          </a>
        </li>
        <li className="Header__social-nav__item">
          <a href="https://www.facebook.com/debtsmiths" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={['fab', 'facebook-square']}/>
          </a>
        </li>
        <li className="Header__social-nav__item">
          <a href="https://www.pinterest.com/debtsmiths" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={['fab', 'pinterest-square']}/>
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header
