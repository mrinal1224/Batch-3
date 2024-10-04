let numbers = [23 ,45,67 ,23, 76]

console.log(numbers)

// multiply all elements with 2 and provide results in a new array

function multiplyBy2(arr){
    let results = []
    for(let i=0 ; i<arr.length ; i++){
        results.push(arr[i]*2)
    }
    return results
}

let finalResults = multiplyBy2(numbers)
console.log(finalResults)



