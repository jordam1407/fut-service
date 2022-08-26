import React, { Component } from 'react';
import logo from "../images/wl-agency-logo.png"
import '../styles/faqs.css'

class Faqs extends Component {
  state = {}

  render() {
    const { div, div1, div2, div3, div4 } = this.state;

    return (
      <div className='div-mother-faqs'>
        <div className='div-son-faqs'>
          <div className='div-content-space-faqs'>
            <div>
              <div className='faqs-answers' onClick={() => this.setState({ div: !div })}>
                <h2 className='faqs-questions'>HOW DOES THE SERVICE WORK?</h2>
                {div ? <ul>
                  <li><span>You buy the chosen service, send the confirmation of the payment to us.</span></li>
                  <li><span>We'll find the Pro-player to complete the ranking ordered.</span></li>
                  <li><span>We'll decide together the best moment to do your games.</span></li>
                </ul> : null}
              </div>
              <div className='faqs-answers' onClick={() => this.setState({ div1: !div1 })}>
                <h2 className='faqs-questions'>WHAT IF YOU DIDN'T REACH THE RANK ORDERED?</h2>
                {div1 ? <span>If your rank isn't achieved then we'll refund you the difference in pricing between the rank you paid for and the rank that was achieved. So for example if you paid for Rank 1 (€70) and our player achieved Rank 2 (€60) we will refund you €10.</span> : null}
              </div>
              <div className='faqs-answers' onClick={() => this.setState({ div2: !div2 })}>
                <h2 className='faqs-questions'>I NEED TO SHARE MY ACCOUNT DETAILS?</h2>
                {div2 ? <span>Yes, it's the only way to get access to your WL games. Since the first moment you'll be able to watch on twitch what the player is doing on your account. After games finished you can change your password.</span> : null}
              </div>
              <div className='faqs-answers' onClick={() => this.setState({ div3: !div3 })}>
                <h2 className='faqs-questions'>I CAN WATCH THE GAMES?</h2>
                {div3 ? <span>After the payment we'll talk to decide the best hour for you and for the player, all games will be on LIVESTREAM, you can watch, comment, share, YOU ARE THE MANAGER!</span> : null}
              </div>
              <div className='faqs-answers' onClick={() => this.setState({ div4: !div4 })}>
                <h2 className='faqs-questions'>HOW TRUSTABLE THE SERVICE ARE?</h2>
                {div4 ? <span>We have completed more then 150 orders since started on FIFA 22, you can see the testimonials on 'ABOUT' page.</span> : null}
              </div>
            </div>
          </div>
          <div className='content-about'>
            <img className='logo-faqs' src={logo} alt="CR7" width="500px" />
          </div>
        </div>
      </div>
    );
  }
}

export default Faqs;