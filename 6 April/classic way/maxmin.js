function maxMin(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }

  return { Max: max, Min: min };
}

console.log(maxMin([8, 3, 9, 4, 5])); // { Max: 9, Min: 3 }
console.log(maxMin([5, 5, 5, 5, 5])); // { Max: 5, Min: 5 }
