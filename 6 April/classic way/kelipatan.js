function getnum(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 || arr[i] % 5 === 0) {
      result.push(arr[i]);
    }
  }
  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[i]) {
        let temp = result[i];
        result[i] = result[j];
        result[j] = temp;
      }
    }
  }

  return result.length ? result : null;
}

console.log(getnum([8, 3, 9, 2, 5])); // [3, 9]
console.log(getnum([3, 4, 6, 7, 9])); // [3, 6, 9]
console.log(getnum([4, 5, 9, 15, 19])); // [5, 9, 15]
console.log(getnum([4, 15, 9, 5, 19, 30, 3, 1])); // [3, 5, 9, 15, 30]
console.log(getnum([2, 4, 7, 8, 1])); // null