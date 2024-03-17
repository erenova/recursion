function fibs(number) {
  let baseArr = [0, 1];
  if (number <= 0) return [];

  if (number === 1) return [0];
  let a = 0;
  let b = 1;

  for (let i = 2; i < number; i++) {
    let c = a + b;
    baseArr.push(c);
    a = b;
    b = c;
  }
  return baseArr;
}

console.log(fibs(6));

function fibsRec(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1]; // Bu durum, aslında opsiyonel, çünkü fibsRec(n-1) ve ardından son iki elemanın toplamı ile aynı sonucu elde edebiliriz.

  let sequence = fibsRec(n - 1);
  sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  return sequence;
}

console.log(fibsRec(5));
console.log(fibsRec(14));
