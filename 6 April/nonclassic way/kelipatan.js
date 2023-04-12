function getnum(arr) {
  const result = arr.filter((num) => num % 3 === 0 || num % 5 === 0).sort((a, b) => a - b);
  return result.length ? result : null;
}

console.log(getnum([8, 3, 9, 2, 5])); // [3, 9]
console.log(getnum([3, 4, 6, 7, 9])); // [6, 9]
console.log(getnum([4, 5, 9, 15, 19])); // [5, 9, 15]
console.log(getnum([4, 15, 9, 5, 19, 30, 3, 1])); // [3, 5, 9, 15, 30]
console.log(getnum([2, 4, 7, 8, 1])); // null