function testTruthy(valString, val) {
    return console.log( valString + ':', val ? 'thuthy' : 'falsy')
}

testTruthy("true", true);
testTruthy("false", false);
testTruthy("new Boolean(false)", new Boolean(false));
testTruthy("''", '');
testTruthy("'Packt'", 'Packt');
testTruthy("new String('')", new String(''));
testTruthy("1", 1);
testTruthy("-1", -1);
testTruthy("NaN", NaN);
testTruthy("new Number(NaN)", new Number(NaN));
testTruthy("{}", {});
var obj = {name: 'Jonh'}
testTruthy("obj.name", obj.name);
testTruthy("obj.age", obj.age);