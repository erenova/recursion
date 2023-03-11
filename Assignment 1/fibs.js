function fibs(val) {
  let numbers = [0, 1];
  if (val <= 0) {
    return [];
  }
  if (val === 1) {
    return numbers.slice(0, val);
  }
  if (val === 2) {
    return numbers;
  }
  for (let i = 2; i < val; i++) {
    numbers.push(numbers[numbers.length - 1] + numbers[numbers.length - 2]);
  }
  return numbers;
}

console.log(fibs(5));
