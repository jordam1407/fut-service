const avatars = [
  'https://cdn-icons-png.flaticon.com/512/4333/4333724.png',
  'https://cdn-icons-png.flaticon.com/512/4333/4333664.png',
  'https://cdn-icons-png.flaticon.com/512/4333/4333668.png',
  'https://cdn-icons-png.flaticon.com/512/4333/4333691.png',
  'https://cdn-icons-png.flaticon.com/512/4333/4333685.png',
  'https://cdn-icons-png.flaticon.com/512/4333/4333720.png',
  'https://cdn-icons-png.flaticon.com/512/4333/4333609.png',
]

const avatarsRandom = avatars.sort(function(){return 0.5 - Math.random()});

export default avatarsRandom;