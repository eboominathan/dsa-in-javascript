/*
  1. Sum of Natural Numbers  
*/

function sumOfNaturalNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
  // Alternatively, you can use the formula n * (n + 1) / 2
  // return (n * (n + 1)) / 2;
}

/*
  2. Sum of digits of Numbers  
*/

function sumOfDigits(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
  // Alternatively, you can use the following method:
  // return n.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
}

/*
  3.Count the number of digits of a number
*/

function countNoOfDigits(num) {
  num = Math.abs(num);
  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
  // Alternatively, you can use the following method:
  // return num.toString().length;
}

/*
4. Palindrome Number    
*/
function isPalindrome(num) {
  let reversed = 0;
  let original = num;
  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }
  return original === reversed;
  /* const str = num.toString();
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr; */
  /*    Alternatively, you can use the following method:
   return num === parseInt(str.split('').reverse().join(''), 10); */
}
