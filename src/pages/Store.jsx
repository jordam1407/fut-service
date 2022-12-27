import React, { Component } from 'react';
import champs from "../images/futchamps.png"
import rivals from "../images/rivals.png"
import obj from "../images/sbc_big.png"
import RewardsCard from '../components/RewardsCard';

class Store extends Component {
  state = {
    displayReward: ''
  }

  scrollToElement = () => {
    const element = document.getElementById('services-opt');
    element.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const { displayReward } = this.state;
    return (
      <div className="mb-40 my-16 flex flex-col w-11/12 mx-auto">
        <h1 class='xl:text-3xl text-3xl font-sans text-center text-gray-900 font-bold pb-6 sm:text-5xl sm:leading-none w-5/6 mx-auto'>Choose one <span class="inline-block text-red-600">Boosting</span> Service</h1>
        <div className="relative lg:px-8 lg:max-w-screen-xl grid lg:gap-8 gap-4 row-gap-5 mb-8 mx-auto md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2">

          <div onClick={() => this.setState({ displayReward: 'Champions' }, this.scrollToElement)}
            className="cursor-pointer p-5 duration-300 max-w-xs active:bg-gray-100 mx-auto transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-lg font-bold leading-5">FUT Champions</p>
              <img className='w-10' src={champs} alt="champs" />
            </div>
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              Delivery time Scheduled.
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              Playstation & Xbox.
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              All games played on stream.
            </li>
          </div>
          <div onClick={() => this.setState({ displayReward: 'Rivals' }, this.scrollToElement)}
            className="cursor-pointer p-5 duration-300 max-w-xs active:bg-gray-100 mx-auto transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-lg font-bold leading-5">Division Rivals</p>
              <img className='w-10' src={rivals} alt="rivals" />

            </div>
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              Delivery time Scheduled.
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              Playstation & Xbox.
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              All games played on stream.
            </li>
          </div>
          <div onClick={() => this.setState({ displayReward: 'Objectives' }, this.scrollToElement)}
            className="cursor-pointer p-5 duration-300 max-w-xs active:bg-gray-100 mx-auto transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-lg font-bold leading-5">Objectives</p>
              <img className='w-10' src={obj} alt="obj" />
            </div>
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              Delivery time scheduled.
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              Playstation & Xbox.
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              All games played on stream.
            </li>
          </div>
        </div>
        <span id='services-opt' class="text-center"><i>Contac Us if you need custom services.</i></span>
        <RewardsCard display={displayReward} />
      </div>
    );
  }
}

export default Store;