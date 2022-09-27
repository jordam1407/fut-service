import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/wl-agency-logo-ligth.png"
import twitch from '../images/twitchw.png'
import instagram from '../images/instagramw.png'
import whatsapp from '../images/whatsappw.png'

export default class Footer extends Component {

  render() {
    return (
      <footer>
        <div>
          <Link to="/">
            <img className="nav-logo" src={logo} alt="logo" width='180px' />
          </Link>
        </div>
        <p className='navbar'>Copyright © 2022 FUT Service - All Rights Reserved.</p>
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
