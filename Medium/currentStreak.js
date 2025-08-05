/*
Create a function that takes the current day (e.g. "2019-09-30"), an array of date objects and returns the "current streak" (i.e. number of consecutive days in a row).

Examples
currentStreak("2019-09-23", [
 {
 date: "2019-09-18"
 },
 {
 date: "2019-09-19"
 },
 {
 date: "2019-09-21"
 },
 {
 date: "2019-09-22"
 },
 {
 date: "2019-09-23"
 }
]) ➞ 3

currentStreak("2019-09-25", [
 {
 date: "2019-09-16"
 },
 {
 date: "2019-09-17"
 },
 {
 date: "2019-09-21"
 },
 {
 date: "2019-09-22"
 },
 {
 date: "2019-09-23"
 }
]) ➞ 0
Notes
The array of dates is sorted chronologically.
The today parameter will always be greater than or equal to the last date in the array.
An empty array should return 0.
*/

function currentStreak(currentDay, dates ) {
  let n = dates.length;
  if (n < 1) return 0;
  if (dates[n-1].date != currentDay) return 0;
  let counter=1;
  for (let i= n-1; i> 0 ; i--){
    let date1= new Date(dates[i].date);
    let date2= new Date(dates[i-1].date);
    let daysSub= Math.floor((date1-date2)/ (1000*60*60*24));
    if (daysSub===1){
      counter++;
    }
    else{
      return counter;
    }
  }
  return counter;

}

exports.solution = currentStreak;