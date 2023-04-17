const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numArr = String(n).split('');
  let max = 0;

  for (let i = 0; i < numArr.length; i++) {
    const number = String(n).replace(numArr[i], '');
    if (number > max) max = number;
  }
  return Number(max);
}

module.exports = {
  deleteDigit
};
