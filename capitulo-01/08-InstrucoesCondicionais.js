console.log('------if------');

var num = 1;
if (num === 1) {
    console.log('num is equal to 1');
}

console.log('------if-else------');

var num = 0;
if (num === 1) {
    console.log('num is equal to 1');
} else {
    console.log('num is not equal to 1, the value pf num is ' + num);
}

console.log('------if-ternário------');

var num = 0;
if (num === 1) {
    num--;
} else {
    num++;
}

console.log('(num === 1) ? num-- : num++: ', (num === 1) ? num-- : num++);


console.log('------vários-if-else------');

var month = 5;
if (month === 1) {
    console.log('January');
} else if (month === 2) {
    console.log('February');
} else if(month === 3) {
    console.log('March');
} else {
    console.log('Month is not January, February or March');
}

console.log('------switch------');

var month = 5;
switch (month) {
    case 1:
        console.log('January')
        break
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    default:
        console.log('Month is not January, February or March');
}
