const test = require('tap').test;
const infixEval = require('../../src/lib/Evaluator');
const DivideByZero = require('../../src/lib/DivideByZero');

test('Evaluator will return the value for the expression', (t) => {

    t.equals(infixEval('2+2'), 4);
    t.equals(infixEval('(2+2)'), 4);

    t.equals(infixEval('10 + 10 / 2'), 15);

    t.equals(infixEval('5 * 10 + 10 / 2'), 55);

    t.equals(infixEval('(2 + 3 * 5) - 8'), 9);
    
    t.equals(infixEval('(2 + 3 * 5) - 8/5'), 16);
    
    t.equals(infixEval('(2 + 3 * 5) - 8/5 * (3)'), 14);
    
    t.equals(infixEval('(2 + 3 * 5) - 8 / 5 * (5 - 2)'), 14);

    t.end();
});

test('Evaluator will throw an DivideByZero if attempted', (t) => {

    const fn = function () {
        infixEval('8/0');
    };

    t.throws(fn, DivideByZero, 'Cannot divide by zero.');

    t.end();
});
