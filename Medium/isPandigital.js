/*
A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.

Examples
isPandigital(98140723568910) ➞ true

isPandigital(90864523148909) ➞ false
// 7 is missing.

isPandigital(112233445566778899) ➞ false
*/

function isPandigital( num ) {
  let string_num= String(num);
  let n= string_num.length;
  let set_num= new Set();
  for (let i=0; i<n; i++){
    let number = string_num[i];
    if (!set_num.has(number)){
        set_num.add(number);
    }
    if (set_num.size === 10) return true;
  }
  return false;
}

exports.solution = isPandigital;