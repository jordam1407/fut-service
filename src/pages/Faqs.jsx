import React, { Component } from 'react';
import steps from '../data/utils';
class Faqs extends Component {
  state = {}

  render() {
    const { div, div1, div2, div3, div4 } = this.state;

    return (



      <div className="mb-40 lg:my-40 my-16 flex flex-col w-11/12 mx-auto">
        <div class="container flex flex-col">
          <h1 class="xl:text-3xl text-3xl font-sans text-center text-gray-900 font-bold pb-6 sm:text-5xl sm:leading-none w-5/6 mx-auto">FAQ's</h1>
        </div>
        <div className='sm:flex flex-col justify-between' onClick={() => this.setState({ div: !div })}>
          <h2 className='hover:text-red-700 cursor-pointer border-b border-black-100 xl:text-xl text-md font-sans pb-2 text-gray-900 font-bold sm:text-5xl sm:leading-none'>{steps[0].title}</h2>
          {div ?
            <span class='my-9 leading-relaxed text-gray-500 lg:h-20 h-48 text:md lg:text-lg'>{steps[0].text}</span>
            : null}
        </div>
        <div className='pt-8 border-t border-black-100 sm:flex flex-col sm:justify-between' onClick={() => this.setState({ div1: !div1 })}>
          <h2 className='hover:text-red-700 cursor-pointer border-b border-black-100 xl:text-xl text-md font-sans pb-2 text-gray-900 font-bold sm:text-2xl sm:leading-none'>{steps[1].title}</h2>
          {div1 ? <span class='my-9 leading-relaxed text-gray-500 lg:h-20 h-48 text:md lg:text-lg'>{steps[1].text}</span> : null}
        </div>
        <div className='pt-8 border-t border-black-100 sm:flex flex-col sm:justify-between' onClick={() => this.setState({ div2: !div2 })}>
          <h2 className='hover:text-red-700 cursor-pointer border-b border-black-100 xl:text-xl text-md font-sans pb-2 text-gray-900 font-bold sm:text-5xl sm:leading-none'>{steps[2].title}</h2>
          {div2 ? <span class='my-9 leading-relaxed text-gray-500 lg:h-20 h-48 text:md lg:text-lg'>{steps[2].text}</span> : null}
        </div>
        <div className='pt-8 border-t border-black-100 sm:flex flex-col sm:justify-between' onClick={() => this.setState({ div3: !div3 })}>
          <h2 className='hover:text-red-700 cursor-pointer border-b border-black-100 xl:text-xl text-md font-sans pb-2 text-gray-900 font-bold sm:text-5xl sm:leading-none'>{steps[3].title}</h2>
          {div3 ? <span class='my-9 leading-relaxed text-gray-500 lg:h-20 h-48 text:md lg:text-lg'>{steps[3].text}</span> : null}
        </div>
        <div className='pt-8 border-t border-black-100 sm:flex flex-col sm:justify-between' onClick={() => this.setState({ div4: !div4 })}>
          <h2 className='hover:text-red-700 cursor-pointer border-b border-black-100 xl:text-xl text-md font-sans pb-2 text-gray-900 font-bold sm:text-5xl sm:leading-none'>{steps[4].title}</h2>
          {div4 ? <span class='my-9 leading-relaxed text-gray-500 lg:h-20 h-48 text:md lg:text-lg'>{steps[4].text}</span> : null}
        </div>
      </div>
    );
  }
}

export default Faqs;