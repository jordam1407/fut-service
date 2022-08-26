import React, { Component } from 'react';
import reward from '../data/champs';
import rivals from '../data/rivals';
import objectives from '../data/objectives';
import ChampsCard from './ChampsCard';

export default class RewardsCard extends Component {

  render() {
    const { display } = this.props;

    const champs = reward.map((prizes, index) => {
      return (
        <div key={index} className='card-display-reward'>
          <img className='item-image' src={prizes.img} alt="ranking" width="80px" />
          <span>{prizes.points}</span>
            <ChampsCard item={prizes.rewards}/>
            {/* {prizes.rewards.map((reward, index) => {
              return (
                <div key={index}>
                  <li className={reward.class}>{reward.item}</li>
                </div>
              )
            })} */}
          <h2>{`€${prizes.price}`}</h2>
          <span className='border'><i>Limited offer.</i></span>
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
              <span className='border'><i>Limited offer.</i></span>
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
            <span className='border'><i>Limited offer.</i></span>
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