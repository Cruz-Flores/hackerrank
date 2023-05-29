// entrada number 1700 < year < 2700
//salida 13.09.2017

/**
 * paso uno, saber que tipo de año es juliano gregoriano o el de la convencion
 * saber si es bisiesto
 *
 * si el año es menor que 1918 y es divisible por 4 o es mayor que 1919 y es divisible por 4 y no por 100 es bisiesto
 * si no
 *
 */

function dayOfProgrammer(year: number): string {
  // Write your code here
  if (
    (year < 1918 && year % 4 === 0) ||
    (year > 1918 &&
      (year % 400 === 0 || (year % 4 === 0 && !(year % 100 === 0))))
  ) {
    return `12.09.${year}`;
  } else if (year === 1918) {
    return '26.09.1918';
  } else {
    return `13.09.${year}`;
  }
}

console.log(dayOfProgrammer(2017));
