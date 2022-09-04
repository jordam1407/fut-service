import React, { Component } from 'react'
import { getFirestore, query, getDocs, collection } from 'firebase/firestore'
import { initializeApp } from 'firebase/app';
import firebaseApp from '../services/firestore';
import Star from './Star';
import '../styles/review.css'
import avatarsRandom from '../data/avatars';

initializeApp(firebaseApp)

const firestore = getFirestore();
export default class Reviews extends Component {
  //item 3, number of reviews to display
  state = {
    item: 3,
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
      clientes: allDocs.sort(function(){return 0.5 - Math.random()}),
    })
  }

  //create ramdom number to display the avatar
 randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  
  render() {
    const { clientes, item } = this.state
    let reviews = [];
    clientes ? reviews = clientes.slice(0, item).map((rev, index) => {
      const stars = rev.Evaluation / 2;
      return (
        <div key={rev.Id} className='card-display-review'>
          <div className='user'>
            <img width="50px" src={avatarsRandom[index] || avatarsRandom[this.randomIntFromInterval(0, 6)]} alt="img" />
            <Star star={stars} />
            <h2>{rev.Name}</h2>
          </div>
          <div className='answer'>
            <p><i>{`"${rev.Answer}"`}</i></p>
          </div>
        </div>
      )
    }) : <div />;
    return (
      <div className='center'>
        <div>
          <span>Number of reviews:</span>
          <select className="input-review" name="item" onChange={this.handleChange}>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="1000">all</option>
          </select>
        </div>
        <div className='teamCard'>
          {reviews}
        </div>
      </div>
    )
  }
}
