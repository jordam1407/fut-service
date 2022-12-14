import React, { Component } from 'react';
import reward from '../data/champs';
import rivals from '../data/rivals';
import objectives from '../data/objectives';

export default class RewardsCard extends Component {

  render() {
    const { display } = this.props;

    const champs = reward.map((prizes, index) => {
      return (
        <div key={index} class="w-64 mb-4 p-4 bg-white mx-4 shadow-lg rounded-2xl">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">{prizes.ranking}</p>
            <img className='w-10' src={prizes.img} alt="champs" />
          </div>
          <p class="text-3xl font-bold text-gray-900">
            {`$${prizes.price}`}
            <span class="text-sm text-gray-300">
              / weekly
            </span>
          </p>
          <li class="mt-4 text-xs text-gray-600">
            This package include 1 WL entry.
          </li>
          <li class="mt-4 text-xs text-gray-600">
            10% discount for 4+ orders.
          </li>
          <li class="mt-4 text-xs text-gray-600">
            Playoffs qualification included in this package.
          </li>
          <ul class="w-full mt-6 mb-6 text-sm text-gray-600">
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
          <a
            rel="noreferrer"
            target="_blank"
            href={prizes.stripe}
          >
            <button type="button" class="py-2 bottom-10 px-4 mt-8 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
              Order Now
            </button>
          </a>
        </div>

      )
    });

    const rivalsReward = rivals.map((prizes, index) => {
      return (
        <div key={index} class="w-64 mb-4 p-4 bg-white mx-4 shadow-lg rounded-2xl">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">{prizes.division}</p>
            <img className='w-24' src={prizes.img} alt="champs" />
          </div>
          <p class="text-3xl font-bold text-gray-900">
            {`$${prizes.price8}`}
            <span class="text-sm text-gray-300">
              / weekly
            </span>
          </p>
          <li class="mt-4 text-xs text-gray-600">
            This package includes 8 rivals wins.
          </li>
          <li class="mt-4 text-xs text-gray-600">
            You need to be in one of the above divisions.
          </li>
          <a
            rel="noreferrer"
            target="_blank"
            href={prizes.stripe}
          >
            <button type="button" class="py-2 bottom-10 px-4 mt-8 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
              Order Now
            </button>
          </a>
        </div>
      )
    });

    const objectivesRewards = objectives.map((prizes, index) => {
      return (
        <div key={index} class="w-64 mb-4 p-4 bg-white mx-4 shadow-lg rounded-2xl">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">{prizes.name}</p>
            <img className='w-10' src={prizes.img} alt="champs" />
          </div>
          <p class="text-3xl font-bold text-gray-900">
            {`$${prizes.price}`}
          </p>
          <div class="flex flex-col justify-between">
            <p class="mt-4 text-xs text-gray-600 lg:h-24">
              {prizes.package}
            </p>
            <a
              rel="noreferrer"
              target="_blank"
              href={prizes.stripe}
            >
              <button type="button" class="py-2 self-end px-4 mt-8 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
                Order Now
              </button>
            </a>
          </div>
        </div>
      )
    });

    return (
      <div className='my-16 flex flex-col lg:flex-row-reverse flex-col-reverse mx-auto'>

        {display === 'Champions' ? champs :
          display === 'Rivals' ? rivalsReward :
            display === 'Objectives' ? objectivesRewards :
              null
        }
      </div>
    );
  }
}