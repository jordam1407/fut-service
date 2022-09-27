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
      const stars = rev.Evaluation / 2;
      return reviews.push(
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
    console.log(reviews[0]);
    return (
      <div className='center'>
        <div className='teamCard'>
          {reviews[item]}
        </div>
        <div>
          <button className="rev" onClick={this.prevRev}>{`< Previous`}</button>
          <button id="button" className="rev" onClick={this.nextRev}>{`Next >`}</button>
          {clientes && <p className='rev-p'>{`${item + 1}/${clientes.length}`}</p>}
        </div>
      </div>
    )
  }
}
