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

// const arr1 = [2, 3, 5, 8];
// let y = [];
// for (let x = 0; x < arr1.length; x++) {
//   y *= arr1[x];
// }
// console.log(y);

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
