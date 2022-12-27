import rank1 from '../images/rank1.png'
import rank2 from '../images/rank2.png'
import rank3 from '../images/rank3.png'
import rank4 from '../images/rank4.png'


const ultimate = 125;
const rarepp = 75;
const totw3 = 100;
const jumbo = 100;
const champs = [
  {
    img: rank4,
    points: '60 Points - (14/6)',
    ranking: 'Rank 4',
    wins: '14',
    price: '35',
    rewards: [
      { item: 'Ultimate'},
      { item: 'Jumbo Rare Players'},
      { item: 'x1 Five 83+ Rare Gold Players'},
      { item: 'x3 84+ Rare Player Pick'},
      { item: '50k FIFA Coins'},
      { item: 'Comunnity Access'},      
      { item: `Pack Worth of ${ultimate + jumbo + totw3 + 50}k +`},
    ]
  },
  {
    img: rank3,
    points: '67 Points - (16/4)',
    ranking: 'Rank 3',
    wins: '16',
    price: '45',
    rewards: [
      { item: 'Ultimate'},
      { item: '2x Rare Players'},
      { item: 'x2 Five 83+ Rare Gold Players'},
      { item: 'x3 84+ Rare Player Pick '},
      { item: '75k FIFA Coins'},
      { item: 'Comunnity Access'},      
      { item: `Pack Worth of ${ultimate + rarepp * 2 + totw3 + 75}k +`},
    ]
  },
  {
    img: rank2,
    points: '72 Points - (18/2)',
    ranking: 'Rank 2',
    wins: '18',
    price: '60',
    rewards: [
      { item: 'Ultimate'},
      { item: 'Ultimate'},
      { item: 'x2 Five 83+ Rare Gold Players'},
      { item: 'x3 84+ Rare Player Pick'},
      { item: '100k FIFA Coins'},
      { item: 'Comunnity Access'},      
      { item: `Pack Worth of ${ultimate * 2 + totw3 + 150}k +`},
    ]
  },
  {
    img: rank1,
    points: '76 Points - (19/1)',
    ranking: 'Rank 1',
    wins: '19',
    price: '70',
    rewards: [
      { item: '2x Ultimate'},
      { item: 'Rare Players'},
      { item: 'x3 Five 83+ Rare Gold Players'},
      { item: 'x3 84+ Rare Player Pick'},
      { item: '100k FIFA Coins'},
      { item: 'Comunnity Access'},      
      { item: `Pack Worth of ${ultimate * 2 + rarepp + totw3 + 150}k +`},
    ]
  },
]

export default champs;