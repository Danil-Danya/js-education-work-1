var yourName = prompt('Введите ваше имя ');
var yourAge = +prompt('Введите ваш возраст ');
var example = alert('Решите примеры');
var plus = +prompt('5 + 5 =');
var minus = +prompt('10 - 5 =');
var multiplication = +prompt('5 * 5 =');
var division = +prompt('10 / 5 =');
var procent = +prompt('15 % 6 =');
var info = alert('Пожалуйста откройте консоль');


console.log('Меня зовут ' + yourName);
console.log('Мне ' + yourAge + ' Лет');
console.log(example);
console.log('1) Пример: ' + '5 + 5 =  ' + (5 + 5) + ' Ваш ответ ' + plus);
console.log('2) Пример: ' + '10 - 5 =  ' + (10 - 5) + ' Ваш ответ ' + minus);
console.log('3) Пример: ' + '5 * 5 =  ' + (5 * 5) + ' Ваш ответ ' + multiplication);
console.log('4) Пример: ' + '10 : 5 =  ' + (10 / 5) + ' Ваш ответ ' + division);
console.log('5) Пример: ' + '15 : 6 =  ' + (15 % 6) + ' остаток от деления' + ' Ваш ответ ' + procent);