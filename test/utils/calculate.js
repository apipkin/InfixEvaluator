const test = require('tap').test;
const calc = require('../../src/utils/calculate');
const DivideByZero = require('../../src/lib/DivideByZero');


test('Calculate adds two numbers with the plus operator', (t) => {
    t.equals(calc(1, 1,'+'), 2);
    t.equals(calc(10, 10,'+'), 20);
    t.equals(calc(100, 100,'+'), 200);
    t.end();
});

test('Calculate subtracts the second number from the right with the minus operator', (t) => {
    t.equals(calc(2, 1,'-'), 1);
    t.equals(calc(11, 10,'-'), 1);
    t.equals(calc(101, 100,'-'), 1);
    t.end();
});

test('Calculate multiplies the two numbers with the asterisk operator', (t) => {
    t.equals(calc(2,2,'*'), 4);
    t.equals(calc(2,3,'*'), 6);
    t.equals(calc(10,25,'*'), 250);
    t.end();
});

test('Calculate divides the two numbers with the slash operator and returns the floor', (t) => {
    t.equals(calc(4,2,'/'), 2);
    t.equals(calc(10,2,'/'), 5);
    t.equals(calc(200, 2,'/'), 100);
    t.end();
});

test('Calculate will throw a DivideByZero error if denominator is 0', (t) => {
    t.throws(function () { calc(2,0,'/'); }, DivideByZero, 'Cannot divide by zero.');
    t.end();
});

