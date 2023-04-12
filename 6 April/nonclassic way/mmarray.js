function num(arr) {
  let maxArr = [];
  let minArr = [];

  for (let i = 0; i < arr.length; i++) {
    maxArr.push(Math.max(...arr[i]));
    minArr.push(Math.min(...arr[i]));
  }

  return [Math.min(...minArr), Math.max(...maxArr)];
}

const arr1 = [ [1,2,3], [6,4,5], [7,9,8] ];
console.log(num(arr1)); // [1, 9]

const arr2 = [ [1,2], [4,5,6] ];
console.log(num(arr2)); // [1, 6]

const arr3 = [ [4,2,5,1,3] ];
console.log(num(arr3)); // [1, 5]

const arr4 = [ [4,2,5], [2,2,2], [9,15,2], [1,5,10] ];
console.log(num(arr4)); // [1, 15]