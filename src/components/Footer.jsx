import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/wl-agency-logo.png"
import twitch from '../images/twitch.png'
import instagram from '../images/instagram.png'
import whatsapp from '../images/whatsapp.png'

export default class Footer extends Component {

  render() {
    return (
      <footer>
        <div className='nav-logo-div'>
          <Link to="/">
            <img className="nav-logo" src={logo} alt="logo" width='70px' />
          </Link>
        </div>
        <p>Copyright © 2022 FUT Service - All Rights Reserved.</p>
        <div className='navbar'>
          <div>
            <a href='https://www.instagram.com/jordammendes/' target="_blank" rel="noreferrer">
              <img className='social' src={instagram} alt={`Instagram of Jordam`} />
            </a>
            <a href='https://www.twitch.tv/jordam1407' target="_blank" rel="noreferrer">
              <img className='social' src={twitch} alt={`Twitch of Jordam`} />
            </a>
            <a href='https://api.whatsapp.com/send?phone=5531975222507' target="_blank" rel="noreferrer">
              <img className='social' src={whatsapp} alt={`Twitch of Jordam`} />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
