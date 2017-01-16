const test = require('tap').test;
const appendLast = require('../../src/utils/appendLast');

test('Appends value to last element in array', (t) => {
    var arr = ['a', 'b', 'c'];
    appendLast(arr, 'hair');
    
    t.equal(arr.length, 3);
    t.equal(arr[0], 'a');
    t.equal(arr[1], 'b');
    t.equal(arr[2], 'chair');
    t.end();
});

test('If array is empty, adds value to end', (t) => {
    var arr = [];
    appendLast(arr, 'apple');

    t.equal(arr.length, 1);
    t.equal(arr[0], 'apple');
    t.end();
});
