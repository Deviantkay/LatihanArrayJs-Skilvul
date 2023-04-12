// Implementasi dengan method reverse()
function Reverse(arr) {
  const reversed = [...arr].reverse()
  return reversed
}

// Implementasi dengan method reduce()
function Reduce(arr) {
  const reversed = arr.reduce((acc, curr) => [curr, ...acc], [])
  return reversed
}

// Penggunaan
const arr = [1, 4, 6, 7]
const arr1 = [4, 7, 3, 1]
const arr2 = [1, 4, 10]
const arr3 = [5]
const arr4 = [5,'a']

console.log(`metode reverse : [${Reverse(arr)}], [${Reverse(arr1)}], [${Reverse(arr2)}], [${Reverse(arr3)}], [${Reverse(arr4)}]`)
// output: metode reverse : [7,6,4,1], [1,3,7,4], [10,4,1], [5]

console.log(`metode reduce : [${Reduce(arr)}], [${Reduce(arr1)}], [${Reduce(arr2)}], [${Reduce(arr3)}], [${Reduce(arr4)}]`)
// output: metode reduce : [7,6,4,1], [1,3,7,4], [10,4,1], [5]