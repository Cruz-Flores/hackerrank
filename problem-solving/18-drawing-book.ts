const pageCount = (n: number, p: number) => {
  const finalPar = n % 2 === 0 ? (n + 2) / 2 : (n + 1) / 2;
  const pagePar = p % 2 === 0 ? (p + 2) / 2 : (p + 1) / 2;

  const a = finalPar - pagePar;
  const b = pagePar - 1;

  return Math.min(a, b);
};

console.log(pageCount(5, 3));
console.log(pageCount(6, 2));
console.log(pageCount(5, 4));
