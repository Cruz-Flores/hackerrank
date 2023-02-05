function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  if (v1 < v2) {
    return 'NO';
  }
  const dist = x2 - x1;
  const jumps = dist / (v1 - v2);
  if (jumps % 1 !== 0) {
    return 'NO';
  }
  return 'YES';
}

function kangarooCGPT(x1: number, v1: number, x2: number, v2: number): string {
  return v1 < v2 || (x2 - x1) % (v1 - v2) !== 0 ? 'NO' : 'YES';
}

function kangarooCGPT1(x1: number, v1: number, x2: number, v2: number): string {
  return v1 > v2 && (x2 - x1) % (v1 - v2) === 0 ? 'YES' : 'NO';
}

// revisar si se puede resolver con rectas secantes
