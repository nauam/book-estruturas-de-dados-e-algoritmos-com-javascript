var num = 0;
console.log('num = 0: ', num);
num = num + 2;
console.log('num = num + 2: ', num);
num = num * 3;
console.log('num = num * 3: ', num);
num - num / 2;
console.log('num - num / 2: ', num);
console.log('num++: ', num++);
console.log('++num: ', ++num);
console.log('num--: ', num--);
console.log('--num: ', --num);
num += 1;
console.log('num += 1: ', num);
num -= 2;
console.log('num -= 2: ', num);
num *= 3;
console.log('num *= 3: ', num);
num /= 2;
console.log('num /= 2: ', num);
num %= 3;
console.log('num %= 3: ', num);

console.log('------------');

console.log("num == '1.5': " + (num == '1.5'));
console.log("num === '1.5': " + (num === '1.5'));
console.log('num != 1: ' + (num != 1));
console.log('num > 1: ' + (num > 1));
console.log('num < 1: ' + (num < 1));
console.log('num >= 1: ' + (num >= 1));
console.log('num <= 1: ' + (num <= 1));
console.log('true && false: ' + (true && false));
console.log('true || false: ' + (true || false));
console.log('!true: ' + (!true));

console.log('------bit-a-bit-32bit-----');

console.log('5 & 2: ', (5 & 2)); // 0101 & 0010 = 000   
console.log('5 | 2: ', (5 | 2)); // 0101 & 0010 = 111
console.log('~5: ', (~5)); // negação
console.log('15 ^ 9: ', (15 ^ 9)); //1111 ^ 1001 = 0110
console.log('6 << 2: ', (6 << 2)); //00110 << 2 = 11000
console.log('24 >> 2: ', (24 >> 2)); //11000 >> 2 = 00110
console.log('26 >> 2: ', (26 >> 2)); //11010 >> 2 = 00110


console.log('------typeof-----');

console.log('typeof num:', typeof num);
console.log('typeof Packt:', typeof 'Packt');
console.log('typeof true:', typeof true);
console.log('typeof [1, 2, 3]:', typeof [1, 2, 3]);
console.log('typeof {name: Jonh}:', typeof {name: 'Jonh'});

console.log('------delete-----');

var myObj = {name: 'Jonh', age: 21};
console.log('myObj:', myObj);
delete myObj.age;
console.log('myObj:', myObj);



