const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 * 
Даны две строки, найдите количество общих символов между ними.
 * 
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
if(s1.length<s2.length) {            /* В операторе if проверяем, если s1 короче, чем s2, то s1 присваиваем переменной aabcc, а s2 достаётся переменной adcaa. Если нет, то — наоборот. Если обе строки имеют одинаковую длину, по умолчанию используется присваивание в блоке else.Это нужно для того, чтобы пробежать по самой короткой строке и посмотреть, существует ли какой-нибудь её символ в переменной adcaa. */
  aabcc=s1;
  adcaa=s2;
}
else {
  aabcc=s2;
  adcaa=s1;

}

for(let i = 0; i < aabcc.length; i++){
  if(longStr.indexOf(aabcc[i]) !== -1){
    return 'YES' /* В цикле for перебираем символы переменной aabcc и используем метод indexOf(), чтобы проверить существование символов из aabcc в строке adcaa. Как было оговорено в начале: обе строки должны иметь общую подстроку, и она может быть всего одним символом. Когда находится первое же совпадение, можно завершать цикл и вернуть YES.

    Если цикл закончится сам, значит функция не нашла общих подстрок и от безысходности вернёт NO. */
  }
}

return 'NO'
}
module.exports = {
  getCommonCharacterCount,
};