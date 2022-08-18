import React, { Component } from 'react';
import Team from '../components/Team';
import cr7 from '../images/tela.png'

class About extends Component {
  render() {
    return (
      <div className='div-mother'>
        <div className='div-son-about'>
          <div className='div-content-space-about'>
            <div>
              <h1>WHO WE ARE?</h1>
              <span>We're passionate FIFA players that decide to use our expertise to help people. We have 4 pro-players in the team, including our CEO Jordam Mendes. Over 150 orders completed for people in more then 10 countries. We're just getting started.</span>
            </div>
            <div className='div-about'>
              <h1>THIS SERVICE IS FOR YOU?</h1>
              <span>It’s for people that love FIFA, and look to grow and improve the club, that strugle on competitive modes, or simply work a lot and don’t have enought time for it. We’ll help you.</span>
            </div>
          </div>
          <div className='content-about'>
            <img src={cr7} alt="CR7" width="700px"  />
          </div>
        </div>
        <div className='meet-about'>
          <div className='div-content-space-meet'>
            <div className='content-text-about'>
              <div>
                <h1>MEET OUR TEAM</h1>
                <span>Our team has four passionate Pro-players with the highest experience levels in FIFA. We share the same feeling about Football, passion!</span>
                <Team />
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default About;