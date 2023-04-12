function fizzBuzz(arr) {
  return arr.map((num) => {
    if (typeof num === 'string') {
      return num;
    } else if (num % 3 === 0 && num % 5 === 0) {
      return 'fizzbuzz';
    } else if (num % 3 === 0) {
      return 'fizz';
    } else if (num % 5 === 0) {
      return 'buzz';
    } else {
      return num;
    }
  });
}

//contoh penggunaan
const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,'a'];
console.log(fizzBuzz(arr));
