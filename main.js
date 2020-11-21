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


