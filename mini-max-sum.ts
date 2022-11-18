const intArray = [5, 5, 5, 5, 5];

// const miniMax = (intArray: number[]): void => {
//   const min = Math.min(...intArray);
//   const max = Math.max(...intArray);
//   const minSum = intArray
//     .filter((num) => num !== max)
//     .reduce((prev, current) => prev + current);
//   const maxSum = intArray
//     .filter((num) => num !== min)
//     .reduce((prev, current) => prev + current);
//   console.log(minSum, maxSum);
// };

// miniMax(intArray);

//para la suma mas grande primero encuentra el numero mas pequeño, excluyelo
//y suma los numeros restantes

//para la suma mas pequeña encuentra el numero mas grande, excluyelo y suma los
//numeros restantes

// como encuentras el numero mas pequeño o mas grande de un array de numeros?
// si todos los numeros son del mismo tamaño como sabe cuales tomar?

// para la suma mas grande excluye el numero mas pequeño
// si todos los numero son iguales toma solo 4 de ellos y sumalos
//¿como se si todos los numeros son iguales?
// si son diferentes toma todos excepto el mas pequeño

const miniMax = (intArray: number[]): void => {
  const min = Math.min(...intArray);
  const max = Math.max(...intArray);
  let smallestNumbers = intArray.filter((num) => num !== max);
  if (smallestNumbers.length <= 0) {
    smallestNumbers = intArray.map((num, index) => (index <= 3 ? num : 0));
  }
  const minSum = smallestNumbers.reduce((prev, current) => prev + current);
  let greatestNumbers = intArray.filter((num) => num !== min);
  if (greatestNumbers.length <= 0) {
    greatestNumbers = intArray.map((num, index) => (index <= 3 ? num : 0));
  }
  const maxSum = greatestNumbers.reduce((prev, current) => prev + current);
  console.log(minSum, maxSum);
};

// en el siguiente algoritmo primero ordena los numeros y en un bucle suma los
// primeros y ultimos de una sola vez

var m = input.map(function (e) {
  return parseInt(e);
});
console.log(m);
m.sort(function (n1, n2) {
  return n1 - n2;
});
var min = 0,
  max = 0;
for (var i = 0; i < 5; i++) {
  i != 4 && (min += m[i]);
  i != 0 && (max += m[i]);
}
console.log(min + ' ' + max);

// en otro algoritmo suma todos y luego le resta ya sea el minimo o el maximo,
// los cuales calculo en un bucle

// #include <stdio.h>
// #include <string.h>
// #include <math.h>
// #include <stdlib.h>

// int main() {

//     /* Enter your code here. Read input from STDIN. Print output to STDOUT */
//     long long int arr[5];
//     for(int i=0; i<5; i++){
//         scanf("%lld",&arr[i]);
//     }
//     long long int total,max,min,sum1,sum2;
//     total = 0;
//     max = arr[0];
//     min = arr[0];
//     for(int i=0; i<5; i++){
//         total += arr[i];
//         if(max<arr[i])
//             max = arr[i];
//         if(min>arr[i])
//             min = arr[i];
//     }
//     sum1 = total - max;
//     sum2 = total - min;
//     printf("%lld %lld",sum1,sum2);

//     return 0;
// }
