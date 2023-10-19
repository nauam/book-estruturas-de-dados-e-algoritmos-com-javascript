
console.log('------ES5-OOP--------');

function Book1(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
}

Book1.prototype.printTitle = function() {
  console.log(this.isbn);
}

console.log('------ES6-OOP--------');

class Book {
  constructor(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
  }
  printTitle() {
    console.log('title: ', this.title);
  }
}

let book = new Book('title', 'pages', 'isbn');
console.log('book.title:', book.title);
book.title = 'new title';
book.printTitle();

console.log('------ES6-Herança--------');

class ITBook extends Book{
  constructor(title, pages, isbn, technology) {
    super(title, pages, isbn);
    this.technology = technology;
  }
  printTechnology() {
    console.log('technology:', this.technology);
  }
}

let jsBook = new ITBook('Learning JS Algorithms', '200', '1234567890', 'JavaScript');
jsBook.printTitle();
jsBook.printTechnology();

console.log('------ES6-Getters-e-Setters--------');

class Person {
  constructor(name) {
    this._name = name;
  }
  
  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }
}

let lotrChar = new Person('Frodo');
console.log('lotrChar.name:', lotrChar.name);
lotrChar.name = 'Gandalf';
console.log('lotrChar.name:', lotrChar.name);
lotrChar.name = 'Sam';
console.log('lotrChar.name:', lotrChar.name);






