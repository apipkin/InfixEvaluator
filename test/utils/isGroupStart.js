const test = require('tap').test;
const isGroupStart = require('../../src/utils/isGroupStart');

test('isGroupStart returns true when the param is `(`, `{`, or `[`', (t) => {
    t.equals(isGroupStart('('), true);
    t.equals(isGroupStart('{'), true);
    t.equals(isGroupStart('['), true);

    t.end();
});

test('isGroupStart returns false when the param is not `(`, `{`, or `[`', (t) => {
    t.equals(isGroupStart('1'), false);
    t.equals(isGroupStart('3'), false);
    t.equals(isGroupStart('}'), false);

    t.end();
});
