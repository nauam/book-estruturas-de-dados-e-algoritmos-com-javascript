import { circleArea, squareArea } from './08-CalcArea.js';

console.log('circleArea(2):', circleArea(2));
console.log('squareArea(2):', squareArea(2));

import { circleArea as circleA, squareArea as squareA} from './08-CalcArea.js';

console.log('circleA(2):', circleA(2));
console.log('squareA(2):', squareA(2));

import { circle, square} from './08-CalcArea.js';

console.log('circle(2):', circle(2));
console.log('square(2):', square(2));

import * as area from './08-CalcArea.js';

console.log('area.circle(2):', area.circle(2));
console.log('area.square(2):', area.square(2));

import { circleAreaExport, squareAreaExport } from './08-CalcArea.js';

console.log('circleAreaExport(2):', circleAreaExport(2));
console.log('squareAreaExport(2):', squareAreaExport(2));

import Book from './08-Book.js';

const myBook = new Book('some title');
myBook.printTitle();