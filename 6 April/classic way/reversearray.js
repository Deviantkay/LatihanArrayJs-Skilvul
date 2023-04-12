// Implementasi dengan loop for
function revers(arr) {
  let reversed = []
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i])
  }
  return reversed
}


// Penggunaan
const arr = [1, 4, 6, 7]
const arr1 = [4, 7, 3, 1]
const arr2 = [1, 4, 10]
const arr3 = [5]
const arr4 = [5,'a']

console.log(revers(arr), revers(arr1), revers(arr2), revers(arr3), revers(arr4))