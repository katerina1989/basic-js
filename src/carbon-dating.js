const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using ОПРЕДЕЛИТЬ ВОЗРАСТ АРХ.НАХОДКИ С ПОМОЩЬЮ
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values     СОВРЕМЕННАЯ АКТИВНОСТЬ  ПОЛУПЕРИОД ЖИЗНИ
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity ) {
 	
if(typeof sampleActivity !== 'string') return false;
		const year = +sampleActivity;
		const l=0.693; /* l-постоянная полураспада карбонада=*/
    if(isNaN(year)) return false;
		if(year <= 0 || year > 15 ) return false;
		

		return Math.ceil(Math.log(15 / year) * 5730 / l);

}


module.exports = {
  dateSample
};
