/*
Write a function that returns true if you can partition an array into one element and the rest, such that this element is equal to the product of all other elements excluding itself.

Examples
canPartition([2, 8, 4, 1]) ➞ true
// 8 = 2 x 4 x 1

canPartition([-1, -10, 1, -2, 20]) ➞ false

canPartition([-1, -20, 5, -1, -2, 2]) ➞ true
Notes
The array may contain duplicates.
Multiple solutions can exist, any solution is sufficient to return true.
*/

function canPartition(arr) {
//solution in 0(n^2)
//   let mul = 1;
//   for (let i=0; i < arr.length; i++) {
//     let num=arr[i];
//     for (let j=0; j < arr.length; j++) {
//       if (i != j){
//         mul *= arr[j];
//       }
//     }
//     if (mul == num){
//         return true;
//       }
//     mul = 1;
//   }
// return false;



//solution in 0(n)
let mul=1;
let counterOfZero=0;
for (let num of arr){
  if (num === 0 ){
    counterOfZero++;
  }
  mul *= num;
}
if (mul === 0){
  if (counterOfZero > 1){
    return true;
  }
  return false;
}
for (num of arr){
  let res = mul/num;
  let carry = mul%num;
  if (res === num && carry === 0){
    return true;
  }
}
return false;
}

exports.solution = canPartition;