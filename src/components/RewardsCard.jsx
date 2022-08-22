import React, { Component } from 'react';
import reward from '../data/reward';

export default class RewardsCard extends Component {

  render() {
    const rewards = reward.map((prizes) => {
      return (
        <div className='card-display'>
          <img src={prizes.img} alt="ranking" width="80px" />
          <div  className='div-ul'>
            <div>
              <li className='pack'>{prizes.rewards[1]}</li>
              <li className='pack'>{prizes.rewards[2]}</li>
              <li className='pick'>{prizes.rewards[3]}</li>
              <li className='totw'>{prizes.rewards[4]}</li>
            </div>
            <div>
              <li className='coin'>{prizes.rewards.coins}</li>
              <li className='plus'>{prizes.rewards[5]}</li>
              <li className='plus'>{prizes.rewards[6]}</li>
              <li className='plus'>{prizes.rewards[7]}</li>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div className='div-cards-rewards'>
        {rewards}
      </div>
    );
  }
}