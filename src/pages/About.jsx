import React, { Component } from 'react';
import Reviews from '../components/Reviews';
import Team from '../components/Team';
import cr7 from '../images/tela.png'
import '../styles/about.css'

class About extends Component {
  render() {
    return (
      // <div className='div-mother'>
      //   <div className='div-son-about'>
      //     <div className='div-content-space-about'>
      //       <div>
      //         <h1>WHO WE ARE?</h1>
      //         <span>We're passionate FIFA players that decide to use our expertise to help people. We have 4 pro-players in the team, including our CEO Jordam Mendes. Over 150 orders completed for people in more then 10 countries. We're just getting started.</span>
      //       </div>
      //       <div className='div-about'>
      //         <h1>THIS SERVICE IS FOR YOU?</h1>
      //         <span>It’s for people that love FIFA, and look to grow and improve the club, that strugle on competitive modes, or simply work a lot and don’t have enought time for it. We’ll help you.</span>
      //       </div>
      //     </div>
      //     <div className='div-content-space-logo'>
      //       <img  className='home-img' src={cr7} alt="CR7" width="700px"  />
      //     </div>
      //   </div>
      //   <div className='meet-about'>
      //     <div className='div-content-space-meet'>
      //       <div className='who-text'>
      //         <div>
      //           <h1>MEET OUR TEAM</h1>
      //           <span>Our team has four passionate Pro-players with the highest experience levels in FIFA. We share the same feeling about Football, passion!</span>
      //         </div>
      //           <Team />
      //       </div>
      //     </div>
      //   </div>
      //   <div className='meet-about'>
      //     <div className='div-content-space-meet'>
      //       <div className='who-text'>
      //         <div>
      //           <h1>COSTUMERS REVIEW</h1>
      //           <span>What our costumers say about the service?</span>
      //         </div>
      //         <Reviews />                
      //       </div>
      //     </div>
      //   </div>
      // </div>
      // <section class="bg-gray-50">
      //   <div
      //     class="mx-auto max-w-screen-xl px-4 py-12 lg:py-32 lg:flex lg:h-screen-sm lg:items-center"
      //   >
      //     <div class="mx-auto lg:px-40 text-center">
      //       <h1 class="text-3xl font-extrabold sm:text-5xl">
      //         Boost Your UT Account to
      //         <strong class="font-extrabold text-red-700 sm:block">
      //           the Next Level.
      //         </strong>
      //       </h1>

      //       <p class="mt-4 sm:text-xl sm:leading-relaxed">
      //         Achieve greatness in FIFA with our boosting service. Our team of expert players has helped countless others in more than 10 countries reach new heights in the game. Make your friends jealous of your FUT Champions Rewards.
      //       </p>

      //       <div class="mt-8 flex flex-wrap justify-center gap-4">
      //         <a
      //           class="block w-full rounded px-12 py-3 text-sm font-medium text-white bg-red-600 shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
      //           href="/pricing"
      //         >
      //           Get Started
      //         </a>

      //       </div>
      //     </div>
      //   </div>
      // </section>

      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="relative flex justify-center items-center flex-col w-full px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-2xl">
          <div className="mb-16 lg:my-40 flex flex-col items-center lg:max-w-screen-md mx-auto lg:pr-5">

            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
              Maximizing your <span class="inline-block text-red-600">Rewards</span>, minimizing your Stress. 
            </h2>
            <p className="pr-5 mb-5 text-xl text-gray-700 md:text-l">
              <span class="inline-block font-bold">Our goal:</span> Help you earn the best possible Reward in Ultimate Team while reducing the stress of competitive play.<br />
              <span class="inline-block font-bold">Our mission:</span> To be the number one Boosting Service for FIFA while providing top-notch support, guidance, entertainment with the best gameplay in Ultimate Team.
            </p>
            <div className="flex items-center">
              <a
                href="/store"
                className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 shadow hover:bg-red-700 focus:shadow-outline focus:outline-none"
              >
                Order now
              </a>
            </div>
          </div>
          <div className="mb-16 lg:mb-40 flex flex-col items-center lg:max-w-screen-2xl lg:pr-5">
            <div class="container flex flex-col justify-center mx-auto">
              <p class="text-gray-500 text-lg text-center font-normal pb-3">PRO-PLAYERS TEAM</p>
              <h1 class="xl:text-3xl text-3xl font-sans text-center text-gray-900 font-bold pb-6 sm:text-5xl sm:leading-none w-5/6 mx-auto">The talented people with the controller</h1>
            </div>
            <div class="mb-16">
              <dh-component>
                <div class="w-full bg-gray-100 px-10 pt-10">
                  <div class="container mx-auto">
                    <div role="list" aria-label="Behind the scenes People " class="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                      <Team />

                    </div>
                  </div>
                </div>
              </dh-component>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;