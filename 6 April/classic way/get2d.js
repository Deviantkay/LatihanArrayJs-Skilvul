function countTotal(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`jumlah ${arr[i][0]} ada ${arr[i][1]}`);
  }
}
const arr = [   ["topi", 3],   ["kaos", 6],   ["jeans", 4], ];

countTotal(arr)