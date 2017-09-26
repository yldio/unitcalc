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
