function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

console.log(isPalindrome('Hallo')); // false
console.log(isPalindrome('apa')); // true
console.log(isPalindrome('oppa')); // false
console.log(isPalindrome('katak')); // true
console.log(isPalindrome('rusak')); // false
