import React, { Component } from 'react';
import team from '../data/team';
import twitch from '../images/twitch.png'
import instagram from '../images/instagram.png'

export default class Team extends Component {

  render() {
    const teams = team.map((guys) => {
      return (
        <div className='card-display'>
          <img className='profile' src={guys.image} alt={guys.name} />
          <h2>{guys.name}</h2>
          <p>{guys.biography}</p>
          <div>
            { guys.champions ? <img className='modes' src={guys.champions} alt='Champions' /> : null}
            { guys.rivals ? <img className='modes' src={guys.rivals} alt='Rivals' /> : null}
            { guys.obj ? <img className='modes' src={guys.obj} alt='Obj' /> : null}
          </div>
          <div>
            <a href={guys.instagram} target="_blank" rel="noreferrer">
              <img className='social' src={instagram} alt={`Instagram of ${guys.name}`} />
            </a>
            <a href={guys.twitch} target="_blank" rel="noreferrer">
              <img className='social' src={twitch} alt={`Twitch of ${guys.name}`} />
            </a>
            { guys.play ? <img className='plat' src={guys.play} alt='Champions' /> : null}
            { guys.xbox ? <img className='plat' src={guys.xbox} alt='Rivals' /> : null}
          </div>
        </div>
      )
    });
    return (
      <div className='teamCard'>
        {teams}
      </div>
    );
  }
}