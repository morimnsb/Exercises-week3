// Exercise 1
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.

// The function should not modify the array. It should return the new array. For instance:

let arr = [5, 3, 8, 1] 
let filterRange = (arr,a,b)=> arr.filter(e => e>a && e<b);
console.log(filterRange(arr, 1, 4));



// Exercises 2
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 } 
let mary = { name: "Mary", age: 28 }

let users = [ john, pete, mary ]

let names = users.map(e => e.name)

console.log(names);// John, Pete, Mary





// Exercises 3
// Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.

// The formula for the average is (age1 + age2 + ... + ageN) / N. For instance:

let john2 = { name: "John", age: 25 }
let pete2 = { name: "Pete", age: 30 }
let mary2 = { name: "Mary", age: 29 }

let arr2 = [ john2, pete2, mary2 ]
let getAverageAge = arr => arr.reduce((a,b) => a+b.age ,0)/3;

console.log( getAverageAge(arr2) )   // (25 + 30 + 29) / 3 = 28