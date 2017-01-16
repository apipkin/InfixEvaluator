/**
 * Tests to see if the value is a valid group end value
 * @param {string} Potential group end value
 * @return {boolean}
 */
function isGroupEnd(str) {
  return /^[\)\]\}]/.test(str);
}

module.exports = isGroupEnd;
