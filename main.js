//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log(person3)
console.log(Object.keys(person3))

for (let i in Object.keys(person3)) {
    console.log(Object.keys(person3)[i])
}



for (const [key, value] of Object.entries(person3)) {
    if (Array.isArray(value)) {
        console.log(`${key}: `)
        value.forEach(thing => console.log(thing))
    } else {
        console.log(`${key}: ${value}`)
    }
}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

class Person {
    constructor(name, age) {

        this.name = name
        this.age = age


        this.printInfo = () => {
            console.log(`My name is ${this.name} and I am ${this.age}, young and beautiful!`)
            return "My info"
        }
    }
}

let myInfo = new Person ("Kym", "30")

console.log(myInfo)
console.log(myInfo.name)
console.log(myInfo['age'])

myInfo.printInfo()

let countUp = (function (){
    let counter = 30
    console.log("addAge")
    return function () {
        console.log(counter)
        return counter ++
    }
})()


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isEvenNumber = (num) => {
    return new Promise((resolve, reject) => {
        if (num %2 == 0){
            resolve (num)
        }else {
            reject(num)
        }
    })
}

isEvenNumber(5)
.then((result) => {
    console.log(`Big Word ${result}`)
})
    .catch((error) => {
        console.log(" Small Number: ${error}")
    })


    /* 
    Codewars
    #1
    https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

//     function arrayDiff(a, b) {
//   const result = a.filter(x => !b.includes(x));
//   return result;
// }


#2 https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript

// function numberToString(num) {
//   let result = num.toString();
//   return result;
// }
