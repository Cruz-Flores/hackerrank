const ar: number[] = [1, 2, 3, 4, 5, 6];

const n: number = ar.length;

const k: number = 5;

function divisibleSumPairs(n: number, k: number, ar: number[]): number {
  // Write your code here
  let pairs: number = 0;
  ar.forEach((curentInt, currentIndex) => {
    ar.forEach((int, index) => {
      if (index > currentIndex && (curentInt + int) % k === 0) {
        pairs = pairs + 1;
      }
    });
  });

  return pairs;
}

console.log(divisibleSumPairs(n, k, ar));

//la opcion mas eficiente es el algoritmo de los dos punteros
function divisibleSumPairsChatGPT(n: number, k: number, ar: number[]): number {
  // Ordenar el arreglo
  ar.sort((a, b) => a - b);

  let pairs: number = 0;
  let left: number = 0;
  let right: number = n - 1;

  while (left < right) {
    const sum = ar[left] + ar[right];

    if (sum % k === 0) {
      pairs++;
      left++;
      right--;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }

  return pairs;
}
