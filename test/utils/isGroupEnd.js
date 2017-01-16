const test = require('tap').test;
const isGroupEnd = require('../../src/utils/isGroupEnd');

test('isGroupEnd returns true when the param is `)`, `}`, or `]`', (t) => {
    t.equals(isGroupEnd(')'), true);
    t.equals(isGroupEnd('}'), true);
    t.equals(isGroupEnd(']'), true);

    t.end();
});

test('isGroupEnd returns false when the param is not `)`, `}`, or `]`', (t) => {
    t.equals(isGroupEnd('1'), false);
    t.equals(isGroupEnd('3'), false);
    t.equals(isGroupEnd('('), false);

    t.end();
});
