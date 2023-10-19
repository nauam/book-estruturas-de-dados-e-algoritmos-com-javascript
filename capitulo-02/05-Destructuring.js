console.log('------ES5-Destructuring--------');

var x = 'a';
var y = 'b';

console.log('x :', x);
console.log('y :', y);

console.log('------ES6-Destructuring--------');

var [x, y] = ['a', 'b'];

console.log('x :', x);
console.log('y :', y);

console.log('------ES5-Destructuring-Swap-------');

var x = 'a';
var y = 'b';

var temp = x;
x = y;
y = temp;

console.log('x :', x);
console.log('y :', y);

console.log('------ES6-Destructuring-Swap-------');

var [x, y] = ['a', 'b'];

[x, y] = [y, x];

console.log('x :', x);
console.log('y :', y);

console.log('------ES5-Property-Shorthand-------');

var x = 'a';
var y = 'b';

var obj = {x: x , y: y};

console.log('obj :', obj);

console.log('------ES6-Property-Shorthand-------');

var [x, y] = ['a', 'b'];
var obj = {x , y};

console.log('obj :', obj);

console.log('------ES5-Shorthand-Method-Names-------');

var hello = {
  name: 'abcdef',
  printHello: function printHello() {console.log('Hello')}
}

hello.printHello();

console.log('------ES6-Shorthand-Method-Names-------');

var hello = {
  name: 'abcdef',
  printHello() {console.log('Hello')}
}

hello.printHello();





