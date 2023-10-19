import { circleArea, squareArea } from './src/CalcArea.js';
import Book from './src/Book.js';

console.log(circleArea(2));  
console.log(squareArea(2));
const myBook = new Book('some title');
myBook.printTitle();