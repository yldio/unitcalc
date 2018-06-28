// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

const test = require('ava');
const { default: unitcalc } = require('../');

test('with multiple num arguments', t => {
  t.deepEqual(unitcalc(1, 2, 3, 4), '0.375rem 0.75rem 1.125rem 1.5rem');
});

test('with single str argument', t => {
  t.deepEqual(unitcalc('1'), '0.375rem');
  t.deepEqual(unitcalc.withBase(10, '1'), '0.625rem');
});

test('with multiple str arguments', t => {
  t.deepEqual(unitcalc('1', '2', '3', '4'), '0.375rem 0.75rem 1.125rem 1.5rem');
  t.deepEqual(
    unitcalc.withBase(10, '1', '2', '3', '4'),
    '0.625rem 1.25rem 1.875rem 2.5rem'
  );
});

test('with single str argument spaced', t => {
  t.deepEqual(unitcalc('1 2 3 4'), '0.375rem 0.75rem 1.125rem 1.5rem');
  t.deepEqual(
    unitcalc.withBase(10, '1 2 3 4'),
    '0.625rem 1.25rem 1.875rem 2.5rem'
  );
});
