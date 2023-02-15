/**los elementos de el primer array son todos factores de el entero considerado
 * el entero considerado es factor de todos los elementos de el segundo array
 * se dice que estos numeros estan entre las matrices, determina cuantos numeros
 * hay de este tipo
 */

//entrada
const a = [2, 4];
const b = [16, 32, 96];

function getTotalX(a: number[], b: number[]): number {
  // Write your code here
  const lastNumber = Math.max(...a);
  const firstNumber = Math.min(...b);
  let numbers: number[] = [];
  for (let index = lastNumber; index <= firstNumber; index++) {
    numbers.push(index);
  }

  const factorsOfNumber = numbers.filter((n) => {
    const check = a.filter((an) => n % an === 0);
    return check.length === a.length;
  });

  const factorOfNumbers = numbers.filter((n) => {
    const check = b.filter((bn) => bn % n === 0);
    return check.length === b.length;
  });
  const factors = factorsOfNumber.filter((fon) =>
    factorOfNumbers.includes(fon)
  );

  return factors.length;
}

// console.log(getTotalX(a, b));
console.log(getTotalX([3, 4], [24, 48]));

function getTotalXRefactor(a: number[], b: number[]): number {
  const lastNumber = Math.max(...a);
  const firstNumber = Math.min(...b);

  return (
    Array.from(
      { length: firstNumber - lastNumber + 1 },
      (_, i) => lastNumber + i
    )
      .filter((n) => a.every((factor) => n % factor === 0))
      //.filter((n) => a.every((factor) => n % factor === 0 && b.every((num) => num % n === 0))).length
      .filter((n) => b.every((num) => num % n === 0)).length
  );
}

//salida
// 3

/**
 * saber que numeros existen entre el primer array y el segundo array
 * como se que numeros existen?
 * se toma el ultimo numero del primer array y el primero del segundo
 * se crea un array que incluye el ultimo y el primero numero
 *
 * iterar por cada uno para saber cual es factor de ambos arrays
 * PRIMER ARRAY
 * como se que los numeros del primer array son factores de un numero?
 *
 *se filtra el primer array, solo pasan los numero que el numero que se itera
 *con el primer array sea modulo de el,  se llamara factores de el numero
 *
 * se filtra el segundo si cada numero dividido entre el que se esta iterando pasa
 * se pasa el numero
 *
 * si la extension de ambos arrays es igual a la extension de a y b pasan la prueba
 *
 *
 *
 *
 */
