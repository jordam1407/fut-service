import React, { Component } from 'react';
import champs from "../images/futchamps.png"
import rivals from "../images/rivals.png"
import obj from "../images/sbc_big.png"
import gif from "../images/gif.gif"
import reward from "../images/reward.png";
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className='div-mother'>
        <div className='div-son'>
          <div className='div-content-space'>
            <h1>WE HELP GROW YOUR ULTIMATE TEAM CLUB</h1>
            <span>LET US PLAY FOR YOU!</span>
            <span>Our high experienced pro-players, can push your UT Club to a whole new
              level, we’re here to help you in any game mode.</span>
            <Link className='link' to="/store">
              <div className='home-img'>
                <div className='home-img1'>
                  <img src={rivals} alt="rivals" width="105px" />
                  <span>RIVALS</span>
                </div>
                <div className='home-img1'>
                  <img src={champs} alt="champs" width="160px" />
                  <span>CHAMPS</span>
                </div>
                <div className='home-img1'>
                  <img src={obj} alt="obj" width="100px" />
                  <span>OBJETIVOS</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className='video'>
          <div className='div-content-space-video'>
            <img src={gif} alt="ranking" className='content' />
            <div className='content-text'>
              <div>
                <h1>WE’LL PLAY ALL YOUR GAMES IN LIVESTREM</h1>
                <span>Our high experienced pro-players, can push your UT Club to a whole new
                  level, we’re here to help you in any game mode.</span>
              </div>
              <Link className='link' to="/about">
                <button className='button-84'>MEET THE TEAM</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='video'>
          <div className='div-content-space-video'>
            <div className='content-text'>
              <div>
                <h1>GET THE BEST FUT CHAMPIONS REWARDS</h1>
                <span>Our team will get you on the ordered rank! All you need to do is enjoy your rewards.</span>
              </div>
              <Link className='link' to="/rewards">
                <button className='button-84'>REWARDS</button>
              </Link>
            </div>
            <img src={reward} alt="ranking" className='content1' />
          </div>
        </div>
        <div className='video'>
          <div className='back'>
            <div className='div-content-space1'>
              <h1>CHOSE YOUR SERVICE</h1>
              <span>LET US PLAY FOR YOU!</span>
              <div className='home-img'>
                <Link className='link' to="/store">
                  <div className='home-img2'>
                    <img src={rivals} alt="rivals" width="126px" />
                    <span>RIVALS</span>
                  </div>
                </Link>
                <Link className='link' to="/store">
                  <div className='home-img2'>
                    <img src={champs} alt="champs" width="192px" />
                    <span>CHAMPS</span>
                  </div>
                </Link>
                <Link className='link' to="/store">
                  <div className='home-img2'>
                    <img src={obj} alt="obj" width="120px" />
                    <span>OBJETIVOS</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className='content-text'>
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
