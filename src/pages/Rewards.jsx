import React, { Component } from 'react';
import '../styles/rewards.css'
import champs from "../images/futchamps.png"
import rivals from "../images/rivals.png"
import obj from "../images/sbc_big.png"
import RewardsCard from '../components/RewardsCard';
import '../styles/rewards.css'

class Reward extends Component {
  render() {
    return (
      <div className='div-mother'>
        <div className='div-son-rewards'>
          <h1>CHOOSE ONE SERVICE</h1>
          <div className='div-img'>
            <div className='chose-img'>
              <img src={rivals} alt="rivals" width="100px" />
              <span>RIVALS</span>
            </div>
            <div className='chose-img'>
              <img src={champs} alt="champs" width="153,6px" />
              <span>CHAMPS</span>
            </div>
            <div className='chose-img'>
              <img src={obj} alt="obj" width="96px" />
              <span>OBJETIVOS</span>
            </div>
          </div>
          <RewardsCard />
        </div>
      </div>
    );
  }
}

export default Reward;