const test = require('tap').test;
const DivideByZero = require('../../src/lib/DivideByZero');

test('DivideByZero is a custom error', (t) => {
    t.isA(new DivideByZero(), 'object');
    t.isA(new DivideByZero(), 'Error');
    t.isA(new DivideByZero(), Error);

    t.end();
});

test('DivideByZero has a default meessage', (t) => {
    t.equals( (new DivideByZero()).message, 'Cannot divide by zero.');

    t.end();
});

test('DivideByZero can have a custom message', (t) => {
    t.equals( (new DivideByZero('Nope')).message, 'Nope');

    t.end();
});
