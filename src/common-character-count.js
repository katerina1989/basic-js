const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2 ) {
let aabcc;
let adcaa;
if(s1.length<s2.length) {
  aabcc=s1;
  adcaa=s2;
}
else {
  aabcc=s2;
  adcaa=s1;

}

for(let i = 0; i < aabcc.length; i++){
  if(longStr.indexOf(aabcc[i]) !== -1){
    return 'YES'
  }
}

return 'NO'
}
module.exports = {
  getCommonCharacterCount,
};