import React, { Component } from 'react';
import hero from '../images/hero.jpg'
import '../index.css'

class Home extends Component {
  render() {
    return (
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="#f9fafb"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={hero}
            alt=""
          />
        </div>
        <div className="relative flex flex-col w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-xl lg:pr-5">

            <p className="inline-block px-3 py-px mb-4 mr-2 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
              FUT Champions
            </p>
            <p className="inline-block px-3 py-px mb-4 mr-2 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
              rivals
            </p>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
              objectives
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
              We help you <span class="inline-block text-red-600">grow your</span> Ultimate Team Club!
            </h2>
            <p className="pr-5 mb-5 text-xl text-gray-700 md:text-l">
              Running out of time? Want to get good rewards?<br />
              Our highly experienced pro-players can push your Ultimate Club to a whole new level. We're here to help you in any game mode.
            </p>
            <div className="flex items-center">
              <a
                href="/store"
                className="inline-flex items-center justify-center h-10 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 shadow hover:bg-red-700 focus:shadow-outline focus:outline-none"
              >
                Order now
              </a>
              <a
                href="/about"
                aria-label=""
                className="inline-flex items-center font-semibold h-10 px-6 text-red-600 shadow hover:text-red-700 transition-colors duration-200"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
