function linearSearchs(target, arr) {
  const found = arr.find((elem) => {
    return elem === target;
  });
  return found !== undefined ? found : undefined;
}

console.log(linearSearchs(3, [8,3,9,2,5]));
console.log(linearSearchs(4, [2,6,7,'a',1]));
console.log(linearSearchs(4, [2,6,'a',4,1]));
console.log(linearSearchs(9, [2,6,7,5,1]));
