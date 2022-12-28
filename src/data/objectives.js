import obj from '../images/sbc_big.png'
const objectives = [
  {
    name: 'Swap Token',
    img: obj,
    stripe: 'https://buy.stripe.com/28o9C4dOR6zT8JabIP',
    price: '10',
    type: 'Online games Only',
    package: <ol class="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400">
    <li>This service include 1 Card.</li>
    <li>Specify the exact Swap Card you want to be done in the form after payment.</li>
    <li>Examples:
      <ul class="space-y-1 ml-5 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400">
        <li clas="ml-5">FUT Friendlies - Australia Swaps.</li>
      </ul>
    </li>
  </ol>,
  },
  {
    name: 'Objective Card',
    img: obj,
    stripe: 'https://buy.stripe.com/fZedSk2697DX8Ja4gp',
    price: '12',
    type: 'Online/Offline games.',
    package: <ol class="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400">
    <li>This service include 1 Card.</li>
    <li>Specify the exact Special Card you want to be done in the form after payment.</li>
    <li>Examples:
      <ul class="space-y-1 ml-5 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400">
        <li clas="ml-5">Winter Wildcards Reinier.</li>
      </ul>
    </li>
  </ol>,
  },
  ]

  export default objectives;