console.log('------------------Interfaces---------------');

interface Person {
    name:string;
    age:number;
}

function printName(person:Person) {
    console.log(person.name)
}

const john = { name: 'John', age: 21 };
const mary = { name: 'Mary', age: 21, phone: '123-45678' }

printName(john);
printName(mary);

console.log('------------------Interfaces---------------');

interface Comparable {
    compareTo(b):number;
}
class MyObject implements Comparable {
    age: number;
    compareTo(b):number {
        return this.age == b.age ? 0 : this.age > b.age ? 1 : -1
    }
}

console.log('------------------Genéricos---------------');

interface ComparableT<T> {
    compareTo(b:T):number;
}
class MyObjectT implements ComparableT<MyObjectT> {
    age: number;
    compareTo(b:MyObject):number {
        return this.age == b.age ? 0 : this.age > b.age ? 1 : -1
    }
}
