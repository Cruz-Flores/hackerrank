function staircase(n: number) {
  for (let i = 0; i < n; i++) {
    let space = n - 1 - i > 0 ? ' ' : '';
    console.log(`${space.repeat(n - 1 - i)}${'#'.repeat(i + 1)}`);
  }
}

staircase(6);
