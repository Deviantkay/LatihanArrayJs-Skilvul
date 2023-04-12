function linearSearch(target, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return arr[i];
    }
  }
  return undefined;
}

console.log(linearSearch(3, [8,3,9,2,5]));
console.log(linearSearch('a', [2,6,7,'a',1]));
console.log(linearSearch(4, [2,6,'a',4,1]));
console.log(linearSearch(9, [2,6,7,5,1]));