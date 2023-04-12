function get2DArray(arr) {
  let total = 0;
  arr.forEach((item) => {
    total += item[1];
    console.log(`jumlah ${item[0]} ada ${item[1]}`);
  });
}

const arr = [ 
  ["topi", 3], 
  ["kaos", 6], 
  ["jeans", 4], 
];

get2DArray(arr);

