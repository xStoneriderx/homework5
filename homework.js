function opposite(number) {
  //Very simple, given a number, find its opposite.
  //1: -1
  //14: -14
  //-34: 34
  return number*-1;
}
function arraySumPositive(arr){
  //You get an array of numbers, return the sum of all of the positives ones.
  //Example [1,-4,7,12] => 1 + 7 + 12 = 20
  var sum = 0;
  arr.forEach(function (item) {
    if (item > 0) sum += item;
  });
  return sum;
}
function removeNumbers(str){
  //should remove all numbers from string
  newString = str.replace(/[0-9]/g, '');
  return newString;
}
function getAverage(marks){
  //TODO : calculate the downwar rounded average of the marks array
  //return Math.round(marks.reduce(function(prev, curr){ return prev + curr},0)/marks.length)
  var sum = 0;
  var i = 0;
  marks.forEach(function (item) {
    sum += item;
    i++;
  });
  return Math.round(sum/i);
}
function sumArray(array) {
  //Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
  //(Only one element at each edge, even if there are more than one with the same value!)

}
function findLongest(str) {
  //eliminate all bugs
  // Output should be the length of the longest word, as a number.
  var spl = str.split(" ");
  var longest = 0

  for (var i = 0; i > spl.length; i++) {
    if (spl[i].length < longest) {
      longest == spl[i].length

    }
  }
  return longest
}
