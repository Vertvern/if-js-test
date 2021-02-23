const text1El = document.getElementById('text1');
const text2El = document.getElementById('text2');
const text3El = document.getElementById('text3');
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

// function makeCounter() {
//   let currentCount = 0; // creating counter
//   return function eventClick(event) {
//     const evt = event;
//     evt.target.style.color = colors[currentCount];
//     // text color changing
//     if (evt.target.style.color === colors[4]) {
//       // reset counter
//       currentCount = -1;
//     }
//     return currentCount++;
//   };
// }

const makeCounter = () => {
  let count = 0; // creating counter
  return (event) => {
    const evt = event;
    evt.target.style.color = colors[count]; // text color changing
    count = count === 4 ? 0 : count + 1; // counter reset
  };
// example of good code
};

/* 23:5 Error Assignment to property of function parameter 'event'.
no-param-reassign - cant understand properly where is the problem and just reassign 'event' */
text1El.addEventListener('click', makeCounter());
// click event added, calling function for coloring text
text2El.addEventListener('click', makeCounter());
text3El.addEventListener('click', makeCounter());

const date = '2020-11-26';
const newDate = date.replace(/2020-11-26/, '26.11.2020'); // data transform
console.log(newDate);

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

const findLocation = (string) => {
  const locations = data.filter((item) => item.country.includes(string)
    || item.city.includes(string)
    || item.hotel.includes(string));
  // searching our location
  return locations.map((item) => (`${item.country}, ${item.city}, ${item.hotel}`));
  // creating new array with location
};
console.log(findLocation('Berlin'));

//  declaration
//  function nameFunc(str){
//   return str;
//  }
//  nameFunc('stroka');
// // expression
// const namefunction = (str) => {
//   return str;
// }
// namefunction('stroka2');
