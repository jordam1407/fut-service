import React, { Component } from 'react';
import champs from "../images/futchamps.png"
import rivals from "../images/rivals.png"
import obj from "../images/sbc_big.png"
import RewardsCard from '../components/RewardsCard';
import '../styles/store.css'

class Store extends Component {
  state = {
    displayReward: 'Champions'
  }
  
  render() {
    const { displayReward } = this.state;
    return (
      <div className='div-mother'>
        <div className='div-son-rewards'>
          <h1>CHOOSE ONE SERVICE</h1>
          <div className='div-img-reward'>
            <div className='chose-img-reward' onClick={() => this.setState({ displayReward: 'Rivals' })}>
              <img className='chose-img1' src={rivals} alt="rivals" width="100px" />
              <span>RIVALS</span>
            </div>
            <div className='chose-img-reward' onClick={() => this.setState({ displayReward: 'Champions' })}>
              <img className='chose-img2' src={champs} alt="champs" width="153,6px" />
              <span>CHAMPS</span>
            </div>
            <div className='chose-img-reward' onClick={() => this.setState({ displayReward: 'Objectives' })}>
              <img className='chose-img3' src={obj} alt="obj" width="96px" />
              <span>OTHERS</span>
            </div>
          </div>
          <RewardsCard display={ displayReward }/>
        </div>
        <span><i>Contac Us if you need custom services.</i></span>
      </div>
    );
  }
}

export default Store;