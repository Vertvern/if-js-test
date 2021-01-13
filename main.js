let user = 'John Doe';
const student = 'Vital';
// при выводе в консоль оба значения- юзер и студент должны появиться в блоке
console.log(user);
console.log(student);

user = student;
console.log(user);
// присвоение нашему юзеру имя студента, получим имя студента

let test = 1;
test++;
// увеличение на 1
test += 1;
// уже к двум прибавляем единицу, получаем 3
console.log(test);
test--;
// отнимаем 1
console.log(test);
// логично предположить, что будет 2
test = !!test;
test = !test;
// после смены типа значения сперва присвоилось true, затем false
console.log(test);

const arr1 = [2, 3, 5, 8];
let y = 1;
for (let x = 0; x < arr1.length; x++) {
  y *= arr1[x];
}
console.log(y);

// не работающее произведение массива

const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let x = !5; x < arr2.length; x++) {
  // как избежать
  if (arr2[x] >= 5 && arr2[x] <= 10) {
    console.log(arr2[x]);
  }
}
// вывод чисел от 5 до 10 включительно
const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let x = 0; x < arr3.length; x++) {
  if ((arr3[x] % 2) === 0) {
    console.log(arr3[x]);
  }
}

// нахождение и вывод в консоль четных чисел
function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}

console.log(min(8, 2));

// min max func
function max(a, b) {
  if (a < b) {
    return b;
  }
  return a;
}

console.log(max(5, 4));

// такой способ записи используется чаще или реже?
function minimum(a, b) {
  return a < b ? a : b;
}

console.log(minimum(75, 34));

function palindrome() {
  const str = 'rammar';
  const len = str.length;
  const middle = Math.floor(len / 2);
  for (let i = 0; i < middle; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome());

// функция палиндрома
function SecondPalindrome(str) {
  if (str === str.split('').reverse().join('')) {
    return true;
  }
  return false;
}
console.log(SecondPalindrome('moon'));
const a = [];
for (let i = 0; i < 10; ++i) a[i] = Math.floor(Math.random() * 100);
console.log(a);
// массив случайных чисел
const zeroWord = [12, 53, 20, 18, 22, 10, 43, 57, 50, 1];
for (let i = 0; i < zeroWord.length; i++) {
  if (zeroWord[i] % 10 === 0) {
    zeroWord[i] = zeroWord[i].toString().replaceAll('0', 'zero');
  }
}
console.log(zeroWord);
// нолики, ура
