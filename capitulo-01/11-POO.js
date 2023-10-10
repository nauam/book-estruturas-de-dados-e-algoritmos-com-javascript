console.log('------POO-simples------');
var obj = new Object();
console.log('var obj = new Object()', obj);
var obj = {};
console.log('var obj = {}', obj);

console.log('------POO-completo------');
obj = {
    name: {
        first: 'Gandalf',
        last: 'the Grey'
    },
    address: 'Middle Earth'
};
console.log("var obj = {name: {…}, address: 'Middle Earth'}", obj);

console.log('------Declaração de uma classe-construtor------');

class Book0 {
    constructor(title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }
}

var book0 = new Book0('title', 'pag', 'isbn');

console.log('book:', book0);
console.log('title:', book0.title);
book0.title = 'new title';
console.log('book:', book0);
console.log('title:', book0.title);

console.log('------Declaração de uma classe-construtor-e-funções------');

class Book1 {
    constructor(title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;

        this.print = function () {
            console.log('book:', this);
        };

        this.printTitle = function () {
            console.log('title:', this.title);
        };
    }
}

Book1.prototype.printIsbn = function() {
    console.log('isbn:', this.isbn);
}

var book1 = new Book1('title', 'pag', 'isbn');

book1.print();
book1.printTitle();
book1.printIsbn();
book1.title = 'new title';
book1.print();
book1.printTitle();
book1.printIsbn();




