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
