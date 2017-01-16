const test = require('tap').test;
const ghp = require('../../src/utils/getHighestPrecedence');

test('getHighestPrecedence returns highest operator based off EMDAS with P lowest', (t) => {
    t.equals(ghp('-', '*'), '*');
    t.equals(ghp('*', '-'), '*');
    t.equals(ghp('+', '*'), '*');
    t.equals(ghp('*', '+'), '*');
    t.equals(ghp('-', '/'), '/');
    t.equals(ghp('/', '-'), '/');
    t.equals(ghp('+', '/'), '/');
    t.equals(ghp('/', '+'), '/');
    t.equals(ghp('-', '('), '-');
    t.equals(ghp('+', '('), '+');
    t.equals(ghp('*', '('), '*');
    t.equals(ghp('/', '('), '/');

    t.end();
});
