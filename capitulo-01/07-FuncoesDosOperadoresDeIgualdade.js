function testTruthy(valString, val) {
    return console.log( valString + ':', val)
}

testTruthy("'packt' ? true : false", 'packt' ? true : false);
testTruthy("'packt' == true", 'packt' == true);
testTruthy("'packt' == false", 'packt' == false);
testTruthy("'packt' === true", 'packt' === true);
testTruthy("'packt' === 'packt'", 'packt' === 'packt');
var person1 = {name: 'John'};
var person2 = {name: 'John'};
var person3 = person2;

console.log("var person1 = {name: 'John'}")
console.log("var person2 = {name: 'John'}")
console.log("var person3 = person2")

testTruthy("person1 == person2", person1 == person2);
testTruthy("person2 == person3", person2 == person3);
testTruthy("person1 === person2", person1 === person2);
testTruthy("person2 === person3", person2 === person3);