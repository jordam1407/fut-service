import React, { Component } from 'react'
import { getFirestore, query, getDocs, collection } from 'firebase/firestore'
import { initializeApp } from 'firebase/app';
import firebaseApp from '../services/firestore';
import Star from './Star';
import '../styles/review.css'

initializeApp(firebaseApp)

const firestore = getFirestore();
export default class Reviews extends Component {
  state = {
    item: 3,
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    }, this.isValidEmail);
  };

  componentDidMount = async () => {
    const q = query(collection(firestore, "clientes"));
    const querySnapshot = await getDocs(q);
    const allDocs = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
    this.setState({
      clientes: allDocs,
    })
  }
  render() {
    const { clientes, item } = this.state
    let reviews = [];
    clientes ? reviews = clientes.slice(0, item).map((rev) => {
      const stars = rev.Evaluation / 2;
      return (
        <div key={rev.Id} className='card-display-review'>
          <div className='user'>
            <img width="50px" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="img" />
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
