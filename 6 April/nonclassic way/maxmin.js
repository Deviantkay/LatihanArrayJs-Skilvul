function maxMin(arr) {
  if (arr.length === 0) {
    return null;
  }
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return { Max: max, Min: min };
}


console.log(maxMin([8, 3, 9, 4, 5])); // { Max: 9, Min: 3 }
console.log(maxMin([5, 5, 5, 5, 5])); // { Max: 5, Min: 5 }
