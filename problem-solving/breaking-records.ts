/**
 * el puntaje del primer juego determina el puntaje del cual se toma referencia
 *
 * los puntajes posteriores, si son mayores o menores cuentan las veces que
 * rompio el record
 *
 * hay que tener contadores de record minimo y maximo
 * hay que tener referencia de record minimo y maximo
 *
 * se toma como referencia el primer numero para ambos records
 *si el consecutivo es mayor
 * es ahora el record minimo y el contador de maximo aumenta en uno
 *
 * si el consecutivo es menor es ahora el record minimo y el contador de minimo
 * aumenta en uno
 *
 * si el consecutivo es igual que cualquiera de los record no pasa nada y se
 *  continua con el siguiente
 */

//input
const scores: number[] = [10, 5, 20, 20, 4, 5, 2, 25, 1];

function breakingRecords(scores: number[]): number[] {
  // Write your code here
  let minRecord: number = scores[0];
  let maxRecord: number = scores[0];
  let minRecordBreakingCount = 0;
  let maxRecordBreakingCount = 0;

  scores.forEach((score) => {
    if (score > maxRecord) {
      maxRecord = score;
      maxRecordBreakingCount++;
    } else if (score < minRecord) {
      minRecord = score;
      minRecordBreakingCount++;
    }
  });

  return [maxRecordBreakingCount, minRecordBreakingCount];
}

console.log(breakingRecords(scores));
