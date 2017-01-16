const test = require('tap').test;
const getLast = require('../../src/utils/getLast');

test('getLast returns the last value in an array', (t) => {
    const arr = ['a', 'b'];

    t.equals(getLast(arr), 'b');
    t.end();
});
