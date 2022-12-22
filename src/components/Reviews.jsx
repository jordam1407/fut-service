import React, { Component } from 'react'
import { getFirestore, query, getDocs, collection } from 'firebase/firestore'
import { initializeApp } from 'firebase/app';
import firebaseApp from '../services/firestore';
import avatarsRandom from '../data/avatars';

initializeApp(firebaseApp)

const firestore = getFirestore();
export default class Reviews extends Component {
  //item 3, number of reviews to display
  state = {
    item: 0,
  }

  //update the state
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    }, this.isValidEmail);
  };

  //get the reviews from firebse
  componentDidMount = async () => {
    const q = query(collection(firestore, "clientes"));
    const querySnapshot = await getDocs(q);
    const allDocs = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
    this.setState({
      clientes: allDocs.sort(function () { return 0.5 - Math.random() }),
    })
  }

  //create ramdom number to display the avatar
  randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  nextRev = () => {
    const { item, clientes } = this.state;
    this.setState({
      item: item === clientes.length - 1 ? 0 : item + 1,
    })
  }

  prevRev = () => {
    const { item, clientes } = this.state;
    this.setState({
      item: item === 0 ? clientes.length - 1 : item - 1,
    })
  }
  render() {
    const { clientes, item } = this.state
    let reviews = [];
    clientes ? clientes.map((rev, index) => {
      return reviews.push(
        <div key={rev.Id} className='flex flex-col justify-center'>
          <div className='flex justify-center items-center'>
            <img class='w-16 mx-2' src={avatarsRandom[index] || avatarsRandom[this.randomIntFromInterval(0, 6)]} alt="img" />
            <span class='font-bold text-3xl mx-2'>{rev.Name}</span>
          </div>
          
            <p class='mt-4 leading-relaxed text-gray-500 lg:h-20 h-48'><i>{`"${rev.Answer}"`}</i></p>
          
        </div>
      )
    }) : <div />;
    console.log(reviews[0]);
    return (
      <div>        
          {reviews[item]}
          <button
            aria-label="Previous slide"
            class="rounded-full border border-gray-600 p-1 mx-2 mt-5 text-gray-600 hover:bg-gray-900 hover:text-white"
            onClick={this.prevRev}
          >
            <svg
              class="h-5 w-5 -rotate-180 transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </button>

          <button
            aria-label="Next slide"
            class="rounded-full border border-gray-600 p-1 mx-2 text-gray-600 hover:bg-gray-900 hover:text-white"
            onClick={this.nextRev}
          >
            <svg
              class="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </button>
      </div>
    )
  }
}
