function sum2DArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  return sum;
}

console.log(sum2DArray([[1,2,3], [4,5,6], [7,8,9]])); // 45
console.log(sum2DArray([[1,2], [4,5,6]])); // 18
console.log(sum2DArray([[1,2,3,4,5]])); // 15
