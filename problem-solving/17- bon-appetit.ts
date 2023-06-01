/**
 * sumar todos los elementos del arreglo menos el que no comio
 * dividir entre dos
 * si el resultado de la division es igual a lo que aporto ana bon appetite
 * si es diferente calcular la diferencia y retornarla
 */

const bill: number[] = [3, 10, 2, 9];
const k: number = 1;
const b: number = 7;

function bonAppetit(bill: number[], k: number, b: number): void {
  // Write your code here
  bill.splice(k, 1);
  const check = bill.reduce((c, a) => c + a);
  const indCheck = check / 2;
  if (indCheck === b) {
    console.log('Bon Appetit');
  } else {
    console.log(b - indCheck);
  }
}

bonAppetit(bill, k, b);
