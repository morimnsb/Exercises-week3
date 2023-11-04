// Exercise 1
// The following function returns true if the parameter age is greater than 18.

// Otherwise, it asks for a confirmation and returns its result.

const checkAge= age => age > 18 ? true : 'Do you have your parents permission to access this page?';
  
// console.log(checkAge(15));
// Rewrite it, to perform the same, but without if...else, and use the arrow function.




// Exercise 2
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// P.S. In this task, the function should support only the natural values of n: integers up from 1.


const pow = (x,n) => n>0 && n<9 && n %1 ===0 ? Math.pow(x,n): " Second number should be only the natural numbers";
// console.log(pow(3,3.5));



// Exercise 3
// Replace Function Expressions with arrow functions in the code:

const ask=(question, yes, no)=> confirm(question)? yes() :no();
// ask(
//   "Do you agree?",
//   function() { alert("You agreed.") },
//   function() { alert("You canceled the execution.") }
// )





// Exercise 4
// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
// input = prompt("a,b");

let calculator = {
  read(){
    this.num1 = +prompt("First number"),
    this.num2 = +prompt("Second number")
   },
  sum(){alert(`Sum of Two numbers =${this.num1 + this.num2}`)},
  mul(){alert(`multiplies of Two numbers =${this.num1 * this.num2}`)}
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());



// Exercise 5
// Write a function min(a,b) which returns the least of two numbers a and b. Use the arrow function along with the question mark operator ?


const min = (a,b) => {
  return a < b ? a : a==b ? "Equal" : b;
};

console.log(min(5, 3));