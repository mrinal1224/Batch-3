// Exercise1-

// You are given an array ,
//you have to calculate sqaure of each element
//  and return all the
//sqaure values in a new array
// Create a function

let nums = [1, 2, 3, 4, 5];
// Impertaive code
function calculateSqaure(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * arr[i]);
  }
  return newArr;
}

let sqaures = calculateSqaure(nums);
console.log(sqaures);
console.log(nums);

// Map

let nums2 = [1, 2, 3, 4, 5];

let mappedSqaures = nums2.map(function (val) {
  return val * val;
});

console.log("Sqaure from Map ", mappedSqaures);
console.log(nums2)

// Excersie - 1

let transcations = [1000 ,2000 ,3000 ,4000 ,5000]
let inrToDollar = 84
// Convert transcations in Rs comvert to dollars



