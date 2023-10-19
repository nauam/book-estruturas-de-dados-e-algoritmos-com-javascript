// @ts-check

console.log('------------------Interfaces---------------');
function printName(person) {
    console.log(person.name);
}
var john = { name: 'John', age: 21 };
var mary = { name: 'Mary', age: 21, phone: '123-45678' };
printName(john);
printName(mary);
console.log('------------------Interfaces---------------');
var MyObject = /** @class */ (function () {
    function MyObject() {
    }
    MyObject.prototype.compareTo = function (b) {
        return this.age == b.age ? 0 : this.age > b.age ? 1 : -1;
    };
    return MyObject;
}());
console.log('------------------Genéricos---------------');
var MyObjectT = /** @class */ (function () {
    function MyObjectT() {
    }
    MyObjectT.prototype.compareTo = function (b) {
        return this.age == b.age ? 0 : this.age > b.age ? 1 : -1;
    };
    return MyObjectT;
}());
