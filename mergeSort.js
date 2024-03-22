function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const leftArr = mergeSort(arr.slice(0, mid));
  const rightArr = mergeSort(arr.slice(mid));
  return merge(leftArr, rightArr);
}

function merge(leftArr, rightArr) {
  let i = 0;
  let j = 0;
  let result = [];

  while (leftArr.length > i && rightArr.length > j) {
    if (leftArr[i] < rightArr[j]) {
      result.push(leftArr[i]);
      i++;
    } else {
      result.push(rightArr[j]);
      j++;
    }
  }

  // Concatenate remaining elements
  // Note: One of these will be empty so it's safe to concatenate both
  return result.concat(leftArr.slice(i)).concat(rightArr.slice(j));
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
/* type node mergeSort.js to test */
