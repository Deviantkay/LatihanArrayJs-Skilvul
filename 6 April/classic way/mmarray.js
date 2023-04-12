function maxMin2DArray(arr) {
  let max = arr[0][0];
  let min = arr[0][0];
  
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      if(arr[i][j] > max) {
        max = arr[i][j];
      }
      if(arr[i][j] < min) {
        min = arr[i][j];
      }
    }
  }
  
  return [min, max];
}

const arr1 = [ [1,2,3], [6,4,5], [7,9,8] ];
console.log(maxMin2DArray(arr1)); // [1, 9]

const arr2 = [ [1,2], [4,5,6] ];
console.log(maxMin2DArray(arr2)); // [1, 6]

const arr3 = [ [4,2,5,1,3] ];
console.log(maxMin2DArray(arr3)); // [1, 5]

const arr4 = [ [4,2,5], [2,2,2], [9,15,2], [1,5,10] ];
console.log(maxMin2DArray(arr4)); // [1, 15]