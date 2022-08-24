import React, { Component } from 'react';
import reward from '../data/champs';
import rivals from '../data/rivals';
import objectives from '../data/objectives';

export default class RewardsCard extends Component {

  render() {
    const { display } = this.props;

    const champs = reward.map((prizes, index) => {
      return (
        <div key={index} className='card-display-reward'>
          <img src={prizes.img} alt="ranking" width="80px" />
          <div className='div-ul'>
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
    const rivalsReward = rivals.map((prizes, index) => {
      return (
        <>
          <div key={index} className='card-display-reward'>
            <img src={prizes.img} className="rivals-img" alt="ranking" width="220px" />
            <span>8 Rivals Wins:</span>
            <div className='div-things'>
              <h2>{`€${prizes.price8}`}</h2>
              <span><i>Limited offer.</i></span>
            </div>
          </div>
        </>
      )
    });
    const objectivesRewards = objectives.map((prizes, index) => {
      return (
        <div key={index} className='card-display-reward'>
          <img src={prizes.img} className="rivals-img" alt="ranking" width="80px" />
              <span>{`${prizes.service} ${prizes.name}:`}</span>
            <div className='div-things'>
              <h2>{`€${prizes.price}`}</h2>
              <span><i>Limited offer.</i></span>
            </div>
        </div>
      )
    });
    return (
      <div className='div-cards-rewards'>

        {display === 'Champions' ? champs :
          display === 'Rivals' ? rivalsReward :
            display === 'Objectives' ? objectivesRewards :
              champs
        }
      </div>
    );
  }
}