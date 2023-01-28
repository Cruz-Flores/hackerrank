const arr1 = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr: number[]) {
  const negative = arr.filter((n) => n < 0);
  const zeros = arr.filter((n) => n === 0);
  const positive = arr.filter((n) => n > 0);

  console.log('positive', (positive.length / arr.length).toFixed(6));
  console.log('negative', (negative.length / arr.length).toFixed(6));
  console.log('zeros', (zeros.length / arr.length).toFixed(6));
}

plusMinus(arr1);
