// Exercise

let nums = [1, 2, 3, 4, 5];

// Calculate the sum of all elements by creating
// a function

function sumArr(arr) {
  let sum = 0; // accumulator

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]; // currVal
    // 0+1 = 1 (sum)
    //1+2 = 3(sum)
    //3+3 = 6(sum)
  }
  return sum;
}
let total = sumArr(nums);
console.log(total);

// reduce - two arguments

let nums2 = [1, 2, 3, 4, 5];

let totalReduce = nums2.reduce(function (acc, currVal) {
  acc = acc + currVal;
  return acc;
}, 0);

console.log("sum from reduce" , totalReduce)



