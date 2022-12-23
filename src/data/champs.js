import rank1 from '../images/rank1.png'
import rank2 from '../images/rank2.png'
import rank3 from '../images/rank3.png'
import rank4 from '../images/rank4.png'
import rank5 from '../images/rank5.png'
import rank6 from '../images/rank6.png'

const ultimate = 125;
const rarepp = 75;
const totw3 = 100;
const jumbo = 100;
const btn1 = ( null
  // <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
  //   <input type="hidden" name="cmd" value="_s-xclick" />
  //   <input type="hidden" name="hosted_button_id" value="J7KJPN9S6A4SN" />
  //   <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" />
  //   <img alt="" border="0" src="https://www.paypalobjects.com/pt_BR/i/scr/pixel.gif" width="1" height="1" />
  // </form>
);
const btn2 = ( null
  // <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  //   <input type="hidden" name="cmd" value="_s-xclick" />
  //   <input type="hidden" name="hosted_button_id" value="BFTX89XM5UWAJ" />
  //   <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" />
  //   <img alt="" border="0" src="https://www.paypalobjects.com/pt_BR/i/scr/pixel.gif" width="1" height="1" />
  // </form>
)

const champs = [
  {
    img: rank1,
    points: '76 Points - (19/1)',
    ranking: 'Rank 1',
    wins: '19',
    price: '70',
    payment: btn1,
    rewards: [
      { item: '2x Ultimate Pack (T)', class: 'pack' },
      { item: 'Rare Players Pack (T)', class: 'pack' },
      { item: '92+ TOTS 3 Players (T)', class: 'totw' },
      { item: '3x TOTS PP (1 of 5) (U)', class: 'pick' },
      { item: '100k FIFA Coins', class: 'coin' },
      { item: 'Comunnity Access', class: 'plus' },
      { item: 'Free Trading tips', class: 'plus' },
      { item: `Pack Worth of ${ultimate * 2 + rarepp + totw3 + 150}k +`, class: 'plus' },
    ]
  },
  {
    img: rank2,
    points: '72 Points - (18/2)',
    ranking: 'Rank 2',
    wins: '18',
    price: '60',
    payment: btn2,
    rewards: [
      { item: '2x Ultimate Pack (T)', class: 'pack' },
      { item: '92+ TOTS 3 Players (T)', class: 'totw' },
      { item: '2x TOTS PP (1 of 5) (U)', class: 'pick' },
      { item: '100k FIFA Coins', class: 'coin' },
      { item: 'Comunnity Access', class: 'plus' },
      { item: 'Free Trading tips', class: 'plus' },
      { item: `Pack Worth of ${ultimate * 2 + totw3 + 150}k +`, class: 'plus' },
    ]
  },
  {
    img: rank3,
    points: '67 Points - (16/4)',
    ranking: 'Rank 3',
    wins: '16',
    price: '45',
    rewards: [
      { item: 'Ultimate Pack (T)', class: 'pack' },
      { item: '2x Rare Players Pack (T)', class: 'pack' },
      { item: '92+ TOTS 3 Players (T)', class: 'totw' },
      { item: '2x TOTS PP (1 of 4) (U)', class: 'pick' },
      { item: '75k FIFA Coins', class: 'coin' },
      { item: 'Comunnity Access', class: 'plus' },
      { item: 'Free Trading tips', class: 'plus' },
      { item: `Pack Worth of ${ultimate + rarepp * 2 + totw3 + 75}k +`, class: 'plus' },
    ]
  },
  {
    img: rank4,
    points: '60 Points - (14/6)',
    ranking: 'Rank 4',
    wins: '14',
    price: '35',
    rewards: [
      { item: 'Ultimate Pack (T)', class: 'pack' },
      { item: '100k Pack (T)', class: 'pack' },
      { item: '90+ TOTS 3 Players (T)', class: 'totw' },
      { item: '3x TOTS PP (1 of 4) (U)', class: 'pick' },
      { item: '50k FIFA Coins', class: 'coin' },
      { item: 'Comunnity Access', class: 'plus' },
      { item: 'Free Trading tips', class: 'plus' },
      { item: `Pack Worth of ${ultimate + jumbo + totw3 + 50}k +`, class: 'plus' },
    ]
  },
  {
    img: rank5,
    points: '20 points',
    ranking: 'Playoffs',
    wins: '5',
    price: '25',
    rewards: [
      { item: 'Ultimate Pack (T)', class: 'pack' },
      { item: 'Rare Players Pack (T)', class: 'pack' },
      { item: '3x TOTS PP (1 of 5) (U)', class: 'pick' },
      { item: '30k FIFA Coins', class: 'coin' },
      { item: 'Comunnity Access', class: 'plus' },
      { item: 'Free Trading tips', class: 'plus' },
      { item: `Pack Worth of ${ultimate + rarepp + 30}k +`, class: 'plus' },

    ]
  },
]

export default champs;