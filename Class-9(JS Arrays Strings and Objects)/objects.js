const person1 = {
    name : 'Aryan',
    age : 18,
    ownsAcar : true
}

// console.log(person1)


// captain America

const cap = {
    firstName : "Steve",
    lastName : 'Rogers',
    age :110,

    allies : ['Bucky' , 'Tony stark' , 'The Hulk'],

    address : {
        country: 'USA',
        state : 'New York',
        city:{
            cityName : 'Brooklyn',
            pin : 13456
        }
    },

    sayHi : function(){
        console.log('Cap says Hi')
    }
}


// Access Object Properties

//dot Notation

console.log(cap.firstName)


// Bracket Notation

console.log(cap['lastName'])

// cityName






