// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

const flatten = require('lodash.flatten');
const isNaN = require('lodash.isnan');
const remcalc = require('remcalc');

const BASE = 6;

const calc = (base, ...values) =>
  flatten(values.map(value => String(value).split(/\s/gim)))
    .map(value => {
      const _value = Number(value);
      return isNaN(_value) ? value : remcalc(_value * base);
    })
    .join(' ');

module.exports = (...values) => calc(BASE, ...values);
module.exports.withBase = calc;
