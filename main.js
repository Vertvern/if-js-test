const text1El = document.getElementById('text1');
const text2El = document.getElementById('text2');
const text3El = document.getElementById('text3');
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

function makeCounter() { // создаем функцию счетчика
  let currentCount = 0;
  return function eventClick(event) {
    const evt = event;
    evt.target.style.color = colors[currentCount];
    // привязываем счетчиком смену цвета к событию клика
    if (evt.target.style.color === colors[4]) {
      // сбрасываем счетчик на последнем цвете в массиве
      currentCount = -1;
    }
    return currentCount++;
  };
}
/* 9:5 Error Assignment to property of function parameter 'event'.
no-param-reassign - не понял в чем именно ошибка, но пришлось переназначать event */
text1El.addEventListener('click', makeCounter());
// добавляем к элементу событие клика, передаем цвет через замыкание
text2El.addEventListener('click', makeCounter());
text3El.addEventListener('click', makeCounter());

let date  = '2020-11-26';
let newDate = date.replace(/2020-11-26/, '26.11.2020'); //преобразование даты
console.log(newDate);