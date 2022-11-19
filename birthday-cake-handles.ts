const candles = [4, 4, 1, 3];
const otherCandles = [2, 2, 2];

const birthDayCandles = () => {
  let sizeDifference = false;
  let comparator = candles[0];
  let numberOfLargerCandles = 0;
  const maxHeight = Math.max(...candles);

  console.log(comparator);

  candles.forEach((candle) => {
    candle < comparator || candle > comparator ? (sizeDifference = true) : null;
  });

  if (sizeDifference) {
    numberOfLargerCandles = candles.filter(
      (candle) => candle === maxHeight
    ).length;
  }

  return numberOfLargerCandles;
};

// const birthDayCandles = (candles: number[]): number => {
//   let max = 0;
//   let candl = 0;
//   for (let i = 0; i < candles.length; i++) {
//     if (max < candles[i]) {
//       max = candles[i];
//     }
//   }

//   for (let i = 0; i < candles.length; i++) {
//     if (max === candles[i]) {
//       candl++;
//     }
//   }

//   return candl;
// };

// mi error fue asumir que solo se contaban las velas si existia diferencia de
// tamaño y que si no existia tal diferencia no devolvia las velas mas grandes
