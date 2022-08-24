import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/wl-agency-logo.png"

export default class Header extends Component {

  render() {
    return (
      <header>
        <div className='nav-logo-div'>
          <Link to="/">
            <img className="nav-logo" src={logo} alt="logo" width='180px'/>
          </Link>
        </div>
        <div className='navbar'>
          <nav>
            <Link className='navbar-item' to="/"> HOME </Link>
            <Link className='navbar-item' to="/store"> STORE </Link>
            <Link className='navbar-item' to="/about"> ABOUT </Link>
            <Link className='navbar-item' to="/faqs"> FAQS </Link>
          </nav>
        </div>
      </header>
    );
  }
}
