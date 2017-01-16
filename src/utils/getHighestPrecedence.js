/**
 * Returns the operator given the precedenc order.
 * @param {string} First operator
 * @param {string} Second operator
 * @return {string} Operator with the highest precedence
 */
function getHighestPrecedence(a, b) {
  var operators = {
    '[': 0, // PARAM
    '{': 0,
    '(': 0,
    '^': 4, // EXPONENT
    '*': 3, // MULTIPLY
    '/': 3, // DIVIDE
    '+': 1, // ADD
    '-': 1  // SUBTRACT
  };
  
  return (operators[a] > operators[b]) ? a : b;
}

module.exports = getHighestPrecedence;
