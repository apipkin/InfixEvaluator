/**
 * Append to last element of array shortcut
 * @param {array} Array to be modified
 * @param {string} Value to be appended to last element of array
 * @return {array} Array after modification
 */
function appendLast(arr, str) {
  if (arr.length === 0) {
      arr.push('');
  }
  arr[arr.length - 1] += str;
  return arr;
}

module.exports = appendLast;
