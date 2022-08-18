import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cr7 from '../images/tela.png'


class About extends Component {
  render() {
    return (
      <div className='div-mother'>
        <div className='div-son-contact'>
          <div className='div-content-space-about'>
            <div>
              <h1>CONTACT US</h1>
              <span>Before contacting us, read the
                <Link className="link" to="/faqs"> FAQs </Link>
                your question might already be answered.</span>
            </div>
            <form className='div-form'>
                  <input className="input" placeholder='Enter your Name' id="name" type="text" />
                  <input className="input"placeholder='Enter a valid Email' id="name" type="text" />
                  <textarea className="input"placeholder='Enter your Question' name="" id="" cols="40" rows="5" />
                  <button className='button-84'>SUBMIT</button>
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

export default About;