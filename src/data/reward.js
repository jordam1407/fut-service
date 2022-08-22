import rank1 from '../images/rank1.png'
import rank2 from '../images/rank2.png'
import rank3 from '../images/rank3.png'
import rank4 from '../images/rank4.png'
import rank5 from '../images/rank5.png'
import rank6 from '../images/rank6.png'
import elite from '../images/two-elite.png'
import six from '../images/six-thre.png'
import ten from '../images/ten-seven.png'
import obj from "../images/sbc_big.png"


const rewards = [
  {
    champs: {
      rankI: {
        img: rank1,
        ranking: 'Rank I',
        wins: '19',
        price: '70',
        coins: '150k',
        packs: {
          1: '2x Ultimate Pack',
          2: '1x Jumbo Rare Pack',
          3: '3x Player-Pick (1 of 5)',
          4: '3x TOTW Pack',
        },
        extra: {
          1: 'Exclusive community access',
          2: 'Free trading tips',
          3: 'Squad Analysis',
        }
      },
      rankII: {
        img: rank2,
        ranking: 'Rank I',
        wins: '18',
        price: '70',
        coins: '150k',
        packs: {
          1: '2x Ultimate Pack',
          2: '1x Jumbo Rare Pack',
          3: '3x Player-Pick (1 of 5)',
          4: '3x TOTW Pack',
        },
        extra: {
          1: 'Exclusive community access',
          2: 'Free trading tips',
          3: 'Squad Analysis',
        }
      },
      rankIII: {
        img: rank3,
        ranking: 'Rank I',
        wins: '16',
        price: '70',
        coins: '150k',
        packs: {
          1: '2x Ultimate Pack',
          2: '1x Jumbo Rare Pack',
          3: '3x Player-Pick (1 of 5)',
          4: '3x TOTW Pack',
        },
        extra: {
          1: 'Exclusive community access',
          2: 'Free trading tips',
          3: 'Squad Analysis',
        }
      },
      rankIV: {
        img: rank4,
        ranking: 'Rank I',
        wins: '14',
        price: '70',
        coins: '150k',
        packs: {
          1: '2x Ultimate Pack',
          2: '1x Jumbo Rare Pack',
          3: '3x Player-Pick (1 of 5)',
          4: '3x TOTW Pack',
        },
        extra: {
          1: 'Exclusive community access',
          2: 'Free trading tips',
          3: 'Squad Analysis',
        }
      },
      rankV: {
        img: rank5,
        ranking: 'Rank I',
        wins: '11',
        price: '70',
        coins: '150k',
        packs: {
          1: '2x Ultimate Pack',
          2: '1x Jumbo Rare Pack',
          3: '3x Player-Pick (1 of 5)',
          4: '3x TOTW Pack',
        },
        extra: {
          1: 'Exclusive community access',
          2: 'Free trading tips',
          3: 'Squad Analysis',
        }
      },
      rankiVI: {

img: rank6,        ranking: 'Rank I',
        wins: '9',
        price: '70',
        coins: '150k',
        packs: {
          1: '2x Ultimate Pack',
          2: '1x Jumbo Rare Pack',
          3: '3x Player-Pick (1 of 5)',
          4: '3x TOTW Pack',
        },
        extra: {
          1: 'Exclusive community access',
          2: 'Free trading tips',
          3: 'Squad Analysis',
        }
      },
    },
    rivals: {
      twoElite:{
        priceTotal: '20',
        priceEach: '3',
        img: elite,
      },
      sixThree:{
        priceTotal: '15',
        priceEach: '2,5',
        img: six,
      },
      tenSeven:{
        priceTotal: '12',
        priceEach: '2',
        img: ten,
      },
    },
    objectives: {
      img: obj,
      price: '10'
    }

  },
]

export default rewards;