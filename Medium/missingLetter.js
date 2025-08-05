/*
What's the Missing Letter?
Given a string of letters in the English alphabet, return the letter that's missing from the string. The missing letter will make the string be in alphabetical order (from A to Z).

If there are no missing letters in the string, return "No Missing Letter".

Examples
missingLetter("abdefg") ➞ "c"

missingLetter("mnopqs") ➞ "r"

missingLetter("tuvxyz") ➞ "w"

missingLetter("ghijklmno") ➞ "No Missing Letter"
Notes
The given string will never have more than one missing letter.
*/

function missingLetter(sentence) {
  let right= sentence.length-1;
  let left = 0;
  let start = sentence.charCodeAt(0);
  let end = sentence.charCodeAt(sentence.length-1);

  if (end - start + 1 ===sentence.length){
    return ("No Missing Letter");
  }

  while (left <= right){
    let mid = Math.floor((right + left)/2);
    let charAtMid = sentence.charCodeAt(mid);

    if (charAtMid === start + mid){
      left=mid+1;
    }
    else{
      right = mid-1;
    }
  }
  
  let missing=String.fromCharCode(sentence.charCodeAt(0)+ left); 
  return missing;  
}

function missingLetter1(sentence) {
  let n= sentence.length;
  for (let i=0; i< n-1; i++){
    let sub= (sentence[i+1].charCodeAt(0))- (sentence[i].charCodeAt(0));
    if (sub > 2){
      return 0;
    }
    else if(sub===2){
      let missing=String.fromCharCode(sentence[i].charCodeAt(0) + 1); 
      return missing;  
    }
  }
  return ("No Missing Letter");
}

exports.solution = missingLetter;