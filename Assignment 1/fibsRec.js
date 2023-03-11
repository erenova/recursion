function fibsRec(val) {
  return val <= 2
    ? val === 1
      ? [0]
      : [0, 1]
    : ((fibs) => [...fibs, fibs[fibs.length - 1] + fibs[fibs.length - 2]])(
        fibsRec(val - 1)
      );
}

console.log(fibsRec(5));
