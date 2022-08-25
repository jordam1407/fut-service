import React, { Component } from 'react';
import gif from "../images/gif.gif"
import logo from "../images/wl-agency-logo.png"
import cr7 from '../images/tela.png'
import reward from "../images/reward.png";
import champs from "../images/futchamps.png"
import rivals from "../images/rivals.png"
import obj from "../images/sbc_big.png"
import { Link } from 'react-router-dom';
import twitch from '../images/twitch.png'
import instagram from '../images/instagram.png'
import whatsapp from '../images/whatsapp.png'
import '../styles/home.css'

class Home extends Component {
  render() {
    return (
      <div className='div-mother'>
        <div className='div-son'>
          <div className='div-content-space'>
            <h1>WE HELP GROW YOUR ULTIMATE TEAM CLUB</h1>
            <span>Running out of time? Want to get good rewards?<br></br>Our highly experienced pro-players can push your Ultimate Club to a whole new level. We're here to help you in any game mode.</span>
            <Link className='link' to="/store">
              <button className='button-84'>LET US PLAY FOR YOU!</button>
            </Link>
            <div className='social-logos'>
              <a href='https://www.instagram.com/jordammendes/' target="_blank" rel="noreferrer">
                <img className='social-home' src={instagram} alt={`Instagram of Jordam`} />
              </a>
              <a href='https://www.twitch.tv/jordam1407' target="_blank" rel="noreferrer">
                <img className='social-home' src={twitch} alt={`Twitch of Jordam`} />
              </a>
              <a href='https://api.whatsapp.com/send?phone=5531975222507' target="_blank" rel="noreferrer">
                <img className='social-home' src={whatsapp} alt={`Twitch of Jordam`} />
              </a>
            </div>
          </div>
          <div className='div-content-space-logo'>
          <img src={cr7} alt="CR7" width="500px" />
          <img src={logo} alt="CR7" width="200px" />
          </div>
        </div>
        <div className='video'>
          <div className='div-content-space-video'>
            <img src={gif} alt="ranking" className='content-video' />
            <div className='content-text-video'>
              <div>
                <h1>WE’LL PLAY ALL YOUR GAMES ON LIVESTREM</h1>
                <span>Enjoy the feeling of being the manager, watch your Club get the best possible scores</span>
              </div>
              <Link className='link' to="/about">
                <button className='button-84'>MEET THE TEAM</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='reward'>
          <div className='div-content-space-reward'>
            <div className='content-text-reward'>
              <div>
                <h1>GET THE BEST FUT CHAMPIONS REWARDS</h1>
                <span>Our team will get you on the ordered rank! All you need to do is enjoy your rewards.</span>
              </div>
              <Link className='link' to="/rewards">
                <button className='button-84'>REWARDS</button>
              </Link>
            </div>
            <img src={reward} alt="ranking" className='reward-img' />
          </div>
        </div>
        <div className='chose'>
          <div className='back-chose'>
            <div className='div-content-chose'>
              <h1>CHOOSE YOUR SERVICE</h1>
              <span>LET US PLAY FOR YOU!</span>
              <div className='div-img'>
                <Link className='link' to="/store">
                  <div className='chose-img'>
                    <img src={rivals} alt="rivals" width="126px" />
                    <span>RIVALS</span>
                  </div>
                </Link>
                <Link className='link' to="/store">
                  <div className='chose-img'>
                    <img src={champs} alt="champs" width="192px" />
                    <span>CHAMPS</span>
                  </div>
                </Link>
                <Link className='link' to="/store">
                  <div className='chose-img'>
                    <img src={obj} alt="obj" width="120px" />
                    <span>OBJECTIVES</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className='content-text-chose'>
              <div>
                <h1>FREE GIFT FOR NEW BUYERS</h1>
                <span>We only have a limited capacity each weekend so contact us to book your weekend in before all spots are taken.</span>
              </div>
              <Link className='link' to="/store">
                <button className='button-84'>BOOK NOW</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
