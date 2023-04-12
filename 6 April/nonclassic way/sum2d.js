function sum2DArray(arr) {
  return arr.reduce((acc, cur) => acc + cur.reduce((sum, val) => sum + val, 0), 0);
}

console.log(sum2DArray([[1,2,3], [4,5,6], [7,8,9]])); // 45
console.log(sum2DArray([[1,2], [4,5,6]])); // 18
console.log(sum2DArray([[1,2,3,4,5]])); // 15
