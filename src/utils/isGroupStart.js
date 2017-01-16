/**
 * Tests to see if the value is a valid group begin value
 * @param {string} Potential group begin value
 * @return {boolean}
 */
function isGroupStart(str) {
  return /^[\(\[\{]/.test(str);
}

module.exports = isGroupStart;
