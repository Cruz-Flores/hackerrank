const intArray = [5, 16, 79, 65, 108];

const miniMax = (intArray: number[]): void => {
  const min = Math.min(...intArray);
  const max = Math.max(...intArray);
  const minSum = intArray
    .filter((num) => num !== max)
    .reduce((prev, current) => prev + current);
  const maxSum = intArray
    .filter((num) => num !== min)
    .reduce((prev, current) => prev + current);
  console.log(minSum, maxSum);
};

miniMax(intArray);
