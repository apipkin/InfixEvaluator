const DivideByZero = require('../lib/DivideByZero');

/**
 * Calculates the left and the right operand with the given operator
 * @param {string | number} Left operand
 * @param {string | number} Right operand
 * @param {string} Operator
 * @return {number} Evaluted value given the operands and operator
 * @throws {DivideByZero}
 */
function calculate(left, right, operator) {
  left = parseInt(left, 10);
  right = parseInt(right, 10);
  
  if (operator === '/' && right === 0) {
    throw new DivideByZero();
  }
  
  switch (operator) {
    case '+':
      return left + right;
    case '-':
      return left - right;
    case '*':
      return left * right;
    case '/': 
      return parseInt(left / right, 10);
  }
}

module.exports = calculate;
