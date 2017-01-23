const utils = require('../utils');
const isGroupStart = utils.isGroupStart;
const isGroupEnd   = utils.isGroupEnd;
const isOperator   = utils.isOperator;
const getLast      = utils.getLast;
const appendLast   = utils.appendLast;


/**
 * Parses a string and tokenizes the input keeping only grouping elements,
 *   mathmatical operators, and numbers
 * @param {string} Expresion to be tokenized
 * @return {array} List of tokenized values
 */
function Tokenize (str) {
  var pointer = 0;
  var tokens = [];
  var chr = '';
  
  while (pointer < str.length) {
    chr = str.charAt(pointer);
    
    if (isGroupStart(chr) || isGroupEnd(chr) || isOperator(chr)) {
      tokens.push(chr);
    }
    else if (/\d/.test(chr)) {
      if (/\d/.test(getLast(tokens)) ) {
        appendLast(tokens, chr);
      } else {
        tokens.push(chr);
      }
    }
    
    pointer++;
  }
  
  return tokens; 
}

module.exports = Tokenize;
