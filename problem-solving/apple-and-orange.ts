const s: number = 7;
const t: number = 11;
const a: number = 5;
const b: number = 15;
const apples: number[] = [-2, 2, 1];
const oranges: number[] = [5, -6];

function countApplesAndOranges(
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[]
): void {
  const applesPosition = apples.map((p) => p + a);
  const orangesPosition = oranges.map((o) => o + b);
  const applesInArea = applesPosition.filter((ap) => ap >= s && ap <= t);
  console.log(applesInArea.length);
  const orangesInArea = orangesPosition.filter((op) => op >= s && op <= t);
  console.log(orangesInArea.length);
}
