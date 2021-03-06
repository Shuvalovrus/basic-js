const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    
    let numberSampleActivity = Number(sampleActivity);

    if(typeof sampleActivity !== 'string' || isNaN(numberSampleActivity) || numberSampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) {
        return false;
    } else {
    return Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivity) /  (0.693 / HALF_LIFE_PERIOD)));
    }
  };
