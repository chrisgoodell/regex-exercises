const assert = require('assert');

// 1. Make a regular expression that only matches:
// Stock market tickers, like AAPL, GOOG and MDB

const regex = /^[A-Z][A-Z]?[A-Z]?[A-Z]?[A-Z]?.?[A-Z]?$/;

assert(regex.test('F'));
assert(regex.test('BAC'));
assert(regex.test('AAPL'));
assert(regex.test('GOOG'));


// 2. Make a regular expression that only matches valid credit card numbers
// Credit card numbers are created in a consistent way.
// American Express cards start with either 34 or 37 and have 15 digits
// Mastercard numbers begin with 51–55 and have 16 digits. 
// Visa cards start with 4 and have between 16 and 19 digits.

const regex = /^[4][0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}[0-9]?[0-9]?[0-9]?$||^[3](4|7)[0-9]{2}-?[0-9]{4}-?[0-9]{4}-?[0-9]{3}$||^(5)[1-5][0-9]{2}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/
//validates Visa, Mastercard and AMEX
//tolerates dashes but they are not required for validation

assert(regex.test('4001-2345-6789-2345'));  // Visa
assert(regex.test('5123-5678-3456-5678'));  // Mastercard
assert(regex.test('3452-4567-3421-592'));   // AMEX