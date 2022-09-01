import React, { Component } from 'react';
import cr7 from '../images/tela.png'
import { getFirestore, query, getDocs, doc, setDoc, collection } from 'firebase/firestore'
import { initializeApp } from 'firebase/app';
import firebaseApp from '../services/firestore';
import '../styles/contact.css'

initializeApp(firebaseApp)

const firestore = getFirestore();
class Contact extends Component {
  state = {
    id: '',
    name: '',
    email: '',
    answer: '',
    evaluation: 10,
  }

  componentDidMount = async () => {
    const q = query(collection(firestore, "clientes"));
    const querySnapshot = await getDocs(q);
    const allDocs = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
    this.setState({
      clientes: allDocs,
    })
  }


  gravarClientes = async () => {
    const { name, email, answer, evaluation, clientes } = this.state;
    const id = clientes ? clientes.map((item) => item.Id) : null;
    console.log(Math.max(...id));
    const newId = Math.max(...id) + 1;

    const date = Date();
    await setDoc(doc(firestore, "clientes", name || newId), {
      Id: newId,
      Name: name,
      Email: email,
      Answer: answer,
      Evaluation: evaluation,
      Data: date,
    });
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleSubmit = async (event) => {
    const { name } = this.state;
    event.preventDefault()
    this.gravarClientes();
    alert(`Thanks for your review ${name}`)
  }

  render() {
    // const { clientes } = this.state;
    // clientes ? console.log(clientes.map((item) => item.Name)) : console.log('deu n');
    return (
      <div className='div-mother'>
        <div className='div-son-contact'>
          <div className='div-content-space-contact'>
            <div>
              <h1>REVIEW</h1>
              <span>Please tell us what you feel about our service.</span>
            </div>
            <form className='div-form-contact'>
              <strong>Name:</strong>
              <input
                name='name'
                onChange={this.handleChange}
                className="input"
                placeholder='Enter your Name'
                id="name"
                type="text"
                required
              />
              <strong>Email:</strong>
              <input
                name='email'
                onChange={this.handleChange}
                className="input"
                placeholder='Enter a valid Email'
                id="name"
                type="email"
              />
              <strong>Rate the service:</strong>
              <select name="evaluation" className="input" onChange={this.handleChange}>
                <option className="input" value="10">10</option>
                <option className="input" value="9">9</option>
                <option className="input" value="8">8</option>
                <option className="input" value="7">7</option>
                <option className="input" value="6">6</option>
                <option className="input" value="5">5</option>
                <option className="input" value="4">4</option>
                <option className="input" value="3">3</option>
                <option className="input" value="2">2</option>
                <option className="input" value="1">1</option>
              </select>
              <strong>
                Please make a review of the service:
              </strong>
              <textarea
                name='answer'
                onChange={this.handleChange}
                className="input"
                placeholder='How was your experience with the service?'
                id=""
                cols="40"
                rows="5"
              />
              <button onClick={this.handleSubmit} className='button-84'>SUBMIT</button>
            </form>
          </div>
          <div className='content-about'>
            <img src={cr7} alt="CR7" width="700px" />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;