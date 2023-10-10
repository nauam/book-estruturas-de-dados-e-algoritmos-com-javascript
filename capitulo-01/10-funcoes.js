console.log('------Função-simples------');

function sayHello() {
    console.log('Hello!');
}

sayHello();

console.log('------Função-com-input------');

function output(text) {
    console.log(text);
}

output('Hello!');

console.log('------Função-com-retorno------');

function sum(num1, num2) {
    return num1 + num2;
}

var result = sum(1, 2);
output(result);
