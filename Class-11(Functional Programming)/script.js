function printName(name , cb1 ,cb2){
    console.log(name)
    cb1('chulet')// printLastName- Fn
    cb2(18) // printAge - Fn
}

function printLastName(lastName){
  console.log(lastName)
}

function printAge(age){
  console.log(age)
}

printName('Jatin' , printLastName , printAge)
