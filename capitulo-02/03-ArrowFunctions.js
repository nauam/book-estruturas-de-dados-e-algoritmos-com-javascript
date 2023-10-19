console.log('------ES5-------');

var circleAreaES5 = function circleArea(r) {
  const PI = 3.14;
  var area = PI * r * r;
  return area;
}

console.log('circleAreaES5(2) :', circleAreaES5(2));

console.log('------ES6+--------');

var circleAreaES6 = r => {
  const PI = 3.14;
  var area = PI * r * r;
  return area;
}

console.log('circleAreaES6+(2) :', circleAreaES6(2));

console.log('------ES6+-única-instrução--------');

var circleAreaES6UnicaInstrucao = r => 3.14 * r * r;

console.log('circleAreaES6+UnicaInstrucao(2) :', circleAreaES6UnicaInstrucao(2));

console.log('------Valores-default-para-parâmetros-de-funções--------');

function sum(x = 1, y = 2, z = 3) {
  return x + y + z;
}

console.log('sum(4, 2) :', sum(4, 2));
