const test = require('tap').test;
const tokenize = require('../../src/lib/Tokenize');

test('tokenize will parse and return tokens given an expression', (t) => {
    const expression = '1+2';
    const tokens = tokenize(expression);

    t.equals(tokens.length, 3);
    t.equals(tokens[0], '1');
    t.equals(tokens[1], '+');
    t.equals(tokens[2], '2');

    t.end();
});

test('tokenize will keep numbers together as it parses', (t) => {
    const expression = '(123 + 223 )';
    const tokens = tokenize(expression);

    t.equals(tokens.length, 5);
    t.equals(tokens[0], '(');
    t.equals(tokens[1], '123');
    t.equals(tokens[2], '+');
    t.equals(tokens[3], '223');
    t.equals(tokens[4], ')');

    t.end();
});