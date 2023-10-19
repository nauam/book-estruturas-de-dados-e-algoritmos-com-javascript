console.log('------VAR-------');

var framework = 'Angular';
var framework = 'React';

console.log('framework:', framework);

console.log('------LET-------');

let language = 'JavaScript';
//let language = 'Ruby';

console.log('language:', language);

console.log('------CONST-------');

const PI = 3.14159;
//PI = 3;

console.log('PI:', PI);

console.log('------CONST-(Obj)-------');

const jsFramework = {
    name: 'Angular'
}

jsFramework.name = 'React';

console.log('jsFramework:', jsFramework);

console.log('------CONST-(other Obj)-------');

//jsFramework = {
//    name: 'Vue'
//}

console.log('jsFramework:', jsFramework);

console.log('------Escopo de variáveis com let e const-------');

let movie = 'Lord of the Rings'; 

function starWarsFan() {
  const movie = 'Star Wars';
  return movie;
}

function marvelFan() {
  movie = 'The Avengers';
  return movie;
}

function blizzardFan() {
  const isFan = true;
  let phrase = 'Warcraft'; 
  console.log('Before if: ' + phrase);
  if (isFan) {
    let phrase = 'initial text'; 
    phrase = 'For the Horde!'; 
    console.log('Inside if: ' + phrase);
  }
  phrase = 'For the Alliance!';
  console.log('After if: ' + phrase);
}

console.log('movie:', movie); 
console.log('starWarsFan():', starWarsFan());
console.log('marvelFan():', marvelFan()); 
console.log('movie:', movie); 
blizzardFan();

