const s: number[] = [2, 2, 1, 3, 2];
const d: number = 4;
const m: number = 2;

function birthday(s: number[], d: number, m: number): number {
  if (s.length < m) {
    return 0;
  }
  let combinations: number = 0;
  for (let index = 0; index <= s.length - m; index++) {
    const squares = s.slice(index, index + m);
    const sum = squares.reduce(
      (acumulador, valorActual) => acumulador + valorActual
    );
    if (sum === d) {
      combinations++;
    }
  }

  return combinations;
}

console.log(birthday(s, d, m));

export {};
