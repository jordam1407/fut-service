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
        <div key={index} class="w-64 mb-4 p-4 bg-white mx-4 shadow-lg rounded-2xl dark:bg-gray-800">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">{prizes.ranking}</p>
            <img className='w-10' src={prizes.img} alt="champs" />
          </div>
          <p class="text-3xl font-bold text-gray-900 dark:text-white">
            {`$${prizes.price}`}
            <span class="text-sm text-gray-300">
              / weekly
            </span>
          </p>
          <li class="mt-4 text-xs text-gray-600 dark:text-gray-100">
            This package include 1 WL entry.
          </li>
          <li class="mt-4 text-xs text-gray-600 dark:text-gray-100">
          10% discount for 4+ orders.
          </li>
          <li class="mt-4 text-xs text-gray-600 dark:text-gray-100">
          This package doesn't include Playoffs.
          </li>
          <ul class="w-full mt-6 mb-6 text-sm text-gray-600 dark:text-gray-100">
            {prizes.rewards.map((reward, index) => {
              return (
                <li key={index} className='mb-3 flex items-center'>
                  <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                    </path>
                  </svg>
                  {reward.item}</li>
              )
            })}
          </ul>
          <button type="button" class="py-2 bottom-10 px-4 mt-8 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
            Add to Cart
          </button>
        </div>

      )
    });

    const rivalsReward = rivals.map((prizes, index) => {
      return (
        <div key={index} class="w-64 mb-4 p-4 bg-white mx-4 shadow-lg rounded-2xl dark:bg-gray-800">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">{prizes.division}</p>
            <img className='w-24' src={prizes.img} alt="champs" />
          </div>
          <p class="text-3xl font-bold text-gray-900 dark:text-white">
            {`$${prizes.price8}`}
            <span class="text-sm text-gray-300">
              / weekly
            </span>
          </p>
          <p class="mt-4 text-xs text-gray-600 dark:text-gray-100">
            This package includes 8 rivals wins. You need to be in one of the above divisions.
          </p>
          <ul class="w-full mt-6 mb-6 text-sm text-gray-600 dark:text-gray-100">
            
          </ul>
          <button type="button" class="py-2 bottom-10 px-4 mt-8 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
            Add to Cart
          </button>
        </div>
      )
    });

    // const rivalsReward = rivals.map((prizes, index) => {
    //   return (
    //     <>
    //       <div key={index} className='card-display-reward'>
    //         <img src={prizes.img} className="rivals-img" alt="ranking" width="220px" />
    //         <span>8 Rivals Wins:</span>
    //         <div className='div-things'>
    //           <h2>{`€${prizes.price8}`}</h2>
    //           <span className='border'><i>Limited offer.</i></span>
    //         </div>
    //       </div>
    //     </>
    //   )
    // });

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
      <div className='my-16 flex flex-col lg:flex-row mx-auto'>

        {display === 'Champions' ? champs :
          display === 'Rivals' ? rivalsReward :
            display === 'Objectives' ? objectivesRewards :
              null
        }
      </div>
    );
  }
}