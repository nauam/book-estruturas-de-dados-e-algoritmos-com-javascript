var myVariable = 'global';
var myOtherVariable = 'global';

function myFunction() {
    var myVariable = 'local';
    return myVariable;
}

function myOtherFunction() {
    myOtherVariable = 'local';
    return myOtherVariable;
}

console.log('------------');
console.log('myVariable: ' + myVariable);
console.log('myVariable: ' + myFunction());
console.log('myVariable: ' + myVariable);
console.log('------------');
console.log('myOtherVariable: ' + myOtherVariable);
console.log('myOtherVariable: ' + myOtherFunction());
console.log('myOtherVariable: ' + myOtherVariable);