// Custom Error
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

/**
 * Custom error message to throw if there is an attempt to divide by zero
 * @param {string} Optional custom message
 */
function DivideByZero (msg) {
  this.name = 'DivideByZero';
  this.message = msg || 'Cannot divide by zero.';
  this.stack = (new Error()).stack;
}

DivideByZero.prototype = Object.create(Error.prototype);
DivideByZero.prototype.constructor = DivideByZero;

module.exports = DivideByZero;
