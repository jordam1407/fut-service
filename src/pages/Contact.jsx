import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cr7 from '../images/tela.png'
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import { initializeApp } from 'firebase/app';
import firebaseApp from '../services/firestore';
import '../styles/contact.css'

initializeApp(firebaseApp)


const firestore = getFirestore();
const clientes = collection(firestore, 'clientes')

class Contact extends Component {
  state = {
    name: '',
    email: '',
    answer: '',
    social: '',
    platform: 'Playstation',
  }


  gravarClientes = () => {
    const { name, email, answer, social, platform } = this.state;
    const date = Date();
    const newDoc = addDoc(clientes, {
      Name: name,
      Email: email,
      Answer: answer,
      Social: social,
      Platform: platform,
      Data: date,
    });
    console.log(newDoc);
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
    alert(`We'll get in touch soon ${name}`)
  }

  render() {
    return (
      <div className='div-mother'>
        <div className='div-son-contact'>
          <div className='div-content-space-contact'>
            <div>
              <h1>CONTACT US</h1>
              <span>Before contacting us, read the
                <Link className="link" to="/faqs"> FAQs </Link>
                your question might already be answered.</span>
            </div>
            <form className='div-form-contact'>
              <input
                name='name'
                onChange={this.handleChange}
                className="input"
                placeholder='Enter your Name'
                id="name"
                type="text"
                required
              />
              <input
                name='email'
                onChange={this.handleChange}
                className="input"
                placeholder='Enter a valid Email'
                id="name"
                type="email"
                required
              />
              <input
                name='social'
                onChange={this.handleChange}
                className="input"
                placeholder='Facebook, Instagram, WhatsApp'
                id="name"
                type="text"
                required
              />
              <select name="platform" className="input" onChange={this.handleChange}>
                <option className="input" value="Playstation">Playstation</option>
                <option className="input" value="Xbox">Xbox</option>
              </select>
              <textarea
                name='answer'
                onChange={this.handleChange}
                className="input"
                placeholder='Enter your Question'
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