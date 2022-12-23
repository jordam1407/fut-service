import React, { Component } from 'react';
import hero from '../images/hero.jpg'
import '../index.css'

class Home extends Component {
  render() {
    return (
      <>
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
                FIFA 23
              </p>
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
                Skyrocket your rewards with our FIFA 23 <span class="inline-block text-red-600">Boosting Service</span>.
              </h2>
              <p className="pr-5 mb-5 text-xl text-gray-700 md:text-l">
                Are you feeling overwhelmed and like you're running out of time to build the best Ultimate Team squad possible? Don't worry, we've got you covered. Our team of highly experienced pro-players are here to help you take your Ultimate Club to new heights.
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
        <div>

        <div class="container flex flex-col lg:mt-40 justify-center mx-auto">
          <h1 class="xl:text-3xl text-3xl font-sans text-center text-gray-900 font-bold pb-6 sm:text-5xl sm:leading-none w-5/6 mx-auto">How does the Boosting Service work?</h1>
        </div>
        <div className="relative lg:px-8 lg:max-w-screen-xl grid gap-8 row-gap-5 mb-8 mx-auto md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">

          <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex mx-auto">
            <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
          </div>
          <div className="p-5 duration-300 max-w-xs mx-auto transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-lg font-bold leading-5">Place the order</p>
              <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-red-100">
                1
              </p>
            </div>
            <p className="text-sm text-gray-900">
              Choose a service you want, fill out the order form with your account details and schedule preferences and make your payment.
            </p>
          </div>
          <div className="p-5 duration-300 max-w-xs mx-auto transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-lg font-bold leading-5">Setting up details</p>
              <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-red-300">
                2
              </p>
            </div>
            <p className="text-sm text-gray-900">
              We'll get in touch with you to set up all the details and give you the pro-player's stream account so you can watch.
            </p>
          </div>
          <div className="p-5 duration-300 max-w-xs mx-auto transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-lg font-bold leading-5">Starting the service</p>
              <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-red-400">
                3
              </p>
            </div>
            <p className="text-sm text-gray-900">
              Our pro-player will start the service at the scheduled time. You'll will be notified 10 minutes before he starts.
            </p>
          </div>
          <div className="p-5 duration-300 max-w-xs mx-auto transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-lg font-bold leading-5">Finishing the order</p>
              <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-red-500">
                4
              </p>
            </div>
            <p className="text-sm text-gray-900">
              You'll receive a notification of the conclusion of the order, attached will be the image of the account with the service finished.
            </p>
          </div>

        </div>
        <div className="container flex flex-col justify-center mx-auto">
          <a
            href="/store"
            className="inline-flex mx-auto w-1/6 items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 shadow hover:bg-red-700 focus:shadow-outline focus:outline-none"
          >
            Place an order
          </a>
        </div>
        </div>
      </>
    );
  }
}

export default Home;
