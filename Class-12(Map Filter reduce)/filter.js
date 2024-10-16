// Exercise

let nums = [1 ,23 ,45 ,46 ,58 ,90 ,13 ,37]

// Filter out Even numbers
// NewArr
// Create a function
// Return the array which contains even numbers

function getEven(arr){
  let newArr = []

  for(let i=0 ; i<arr.length ; i++){
    if(arr[i]%2==0){
        newArr.push(arr[i])
    }
  }
  return newArr
}

let evenNums = getEven(nums)
console.log(evenNums)



let nums2 = [1 ,23 ,45 ,46 ,58 ,90 ,13 ,37]

function checkEven(val){
  return val%2==0
}

let evenArr = nums2.filter(checkEven)

console.log('Even nums from Filter ' , evenArr)


// exercise
let transcations = [1000 ,-2000 ,3000 ,-4000 ,5000]
// Filter out all the deposits

let deposits = transcations.filter(function(val){
    return val >0
})
console.log(deposits)