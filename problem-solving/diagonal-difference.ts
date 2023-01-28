function diagonalDifference(arr: number[]) {
  let values = [0, 0];

  for (let i = 0; i < arr.length; i++) {
    values[0] = values[0] + arr[i][i];
    let reversCount = arr.length - i;
    values[1] = values[1] + arr[i][reversCount - 1];
  }
  const difference = values[0] - values[1];
  const absolutDifference = Math.abs(difference);
  return absolutDifference;
}
