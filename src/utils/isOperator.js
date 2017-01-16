/**
 * Tests to see if the value is a valid operator
 * @param {string} Potential operator
 * @return {boolean}
 */
function isOperator (str) {
  return /^[-+*/]/.test(str);
}

module.exports = isOperator;
