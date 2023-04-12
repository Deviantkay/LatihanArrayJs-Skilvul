function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("Hallo")); // false
console.log(isPalindrome("apa")); // true
console.log(isPalindrome("oppa")); // false
console.log(isPalindrome("katak")); // true
console.log(isPalindrome("rusak")); // false
