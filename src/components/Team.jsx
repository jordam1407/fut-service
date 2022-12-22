import React, { Component } from 'react';
import team from '../data/team';
import twitch from '../images/twitch.png'
import instagram from '../images/instagram.png'

export default class Team extends Component {

  render() {
    const teams = team.map((guys) => {
      return (
        <div key={guys.name} role="listitem" class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 lg:mx-5 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
          <div class="rounded overflow-hidden shadow-md bg-white">
            <div class="absolute -mt-20 w-full flex justify-center">
              <div class="h-32 w-32">
                <img src={guys.image} alt={guys.name} class="rounded-full object-cover h-full w-full shadow-md" />
              </div>
            </div>
            <div class="px-6 mt-16">
              <h1 class="font-bold text-3xl text-center mb-1">{guys.name}</h1>
              <div class="w-full flex justify-center pt-2 pb-2">
                {guys.play ? <img className='w-6 h-6 mx-2' src={guys.play} alt='Champions' /> : null}
                {guys.xbox ? <img className='w-6 h-6' src={guys.xbox} alt='Rivals' /> : null}
              </div>
              <p class="text-center text-gray-600 text-base pt-3 font-normal">{guys.biography}</p>
              <div class="w-full flex justify-center pt-5 pb-5">

                <a href={guys.instagram} target="_blank" rel="noreferrer">
                  <img className='w-6 h-6 mx-2' src={instagram} alt={`Instagram of ${guys.name}`} />
                </a>
                <a href={guys.twitch} target="_blank" rel="noreferrer">
                  <img className='w-6 h-6 mx-2' src={twitch} alt={`Twitch of ${guys.name}`} />
                </a>
              </div>

            </div>
          </div>
        </div>
      )
    });
    return (
        teams
    );
  }
}