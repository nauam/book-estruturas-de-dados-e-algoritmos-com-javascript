function sum(x = 1, y = 2, z = 3) {
  return x + y + z;
}

let params = [3, 4, 5];

console.log('------ES5-Operadores de espalhamento--------');

console.log('sum.apply(undefined, params) :', sum.apply(undefined, params));

console.log('------ES6-Operadores de espalhamento--------');

console.log('sum(...params) :', sum(...params));

console.log('------ES5-Rest--------');

function paramaterFunction(x, y) {
  var a = Array.prototype.slice.call(arguments, 2);
  return (x + y) * a.length;
}

console.log("paramaterFunction(1, 2, 'hello', true, 7) :", restParamaterFunction(1, 2, 'hello', true, 7));

console.log('------ES6-Rest--------');

function restParamaterFunction(x, y, ...a) {
  return (x + y) * a.length;
}

console.log("restParamaterFunction(1, 2, 'hello', true, 7) :", restParamaterFunction(1, 2, 'hello', true, 7));




