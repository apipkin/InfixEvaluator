const tokenize = require('./Tokenize');

const utils = require('../utils');
const isGroupStart = utils.isGroupStart;
const isGroupEnd   = utils.isGroupEnd;
const isOperator   = utils.isOperator;
const isOperand    = utils.isOperand;
const getLast      = utils.getLast;
const calculate    = utils.calculate;
const getHighestPrecedence = utils.getHighestPrecedence;

/**
 * Evaluate expresion and return the result
 * @param {string} Expresion to be evaluated
 * @return {number}
 */
function Evaluator (exp) {
  var tokens = tokenize(exp);

  var operators = [];
  var operands = [];
  
  var token, left, right, result;

  while (tokens.length) {
    token = tokens.shift();

    if (isOperand(token)) {
      operands.push(token);
    }
    else if (isGroupStart(token)) {
      operators.push(token);
    }
    else if (isGroupEnd(token)) {
      while (!isGroupStart(getLast(operators))) {
        right = operands.pop();
        left = operands.pop();
        result = calculate(left, right, operators.pop());
        operands.push(result);
      }
      operators.pop();
    }
    else if (isOperator(token)) {
      while (
        operators.length && 
        operands.length > 1 && 
        getHighestPrecedence(token, getLast(operators)) !== token
      ) {
        right = operands.pop();
        left = operands.pop();
        result = calculate(left, right, operators.pop());
        operands.push(result);
      }
      operators.push(token);
    }
  }
  
  while (operators.length) {
    right = operands.pop();
    left = operands.pop();
    result = calculate(left, right, operators.pop());
    operands.push(result);
  }

  return operands.pop().toString();
}

module.exports = Evaluator;
