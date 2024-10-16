let transactions = [2000 ,3000 , -2500 , 3000 ,-1000]
// filter out deposits
// change depoists to dollars
// calculate total amount in 

let totalAmountInDollars = transactions.filter(function(val){
    return val>0
  }).map(function(val){
    return val/83
 }).reduce(function(acc , curr){
    acc = acc+curr
    return acc

},0)
  
console.log(totalAmountInDollars)