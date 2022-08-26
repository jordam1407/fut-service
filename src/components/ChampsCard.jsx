import React, { Component } from 'react';


export default class ChampsCard extends Component {
  state = {
    active: false,
  }

  render() {
    const { active } = this.state;

    const { item } = this.props;
    return (
      <div className='show-itens'>
        <h4 onClick={() => this.setState({ active: !active })}><i>Show Rewards:</i></h4>
        <div className={active ? 'div-ul' : 'hide'}>
          {item.map((reward, index) => {
            return (
              <div key={index}>
                <li className={reward.class}>{reward.item}</li>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}
