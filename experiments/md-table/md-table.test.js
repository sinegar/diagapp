import { test }  from 'tape';

import table from './md-table.js'; 

test('test 1', t => {
    t.equal(table(), "");
    t.end();
});

test('test 2', t => {
    t.end();
});