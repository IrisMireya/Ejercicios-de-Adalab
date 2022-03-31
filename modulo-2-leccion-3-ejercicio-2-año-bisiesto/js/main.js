'use strict';
const year = 2582;

//three conditions to find out the leap year
if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {console.log(year + ' es año bisiesto');
} else { console.log(year + ' no es año bisiesto');
}