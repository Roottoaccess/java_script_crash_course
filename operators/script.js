console.log("This is the operator tutorial for javascript");
// Operators in java script
// Arithmetic operators
let a  = 5;
let b = 2;

console.log("a = ", a,", b = ",b);
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
// This is the modulous operator to find the rem
console.log("a % b = ", a % b);
// This is the exponentiation operator to find 
// the remainder
console.log("a ** b = ", a ** b);
// Unary operator 
// Increment operator
console.log(" ++a = ", ++a);
// Decrement operator
console.log(" --b = ", --b);
let x = a != b;
console.log(x);

// Tripple equal to and not double equal to
let q = "5";
let w = 5;
// Strick version also check the datatype also
console.log(q === w);

console.log(q !== w);

// Logical Operators

let cond1 = a > b;
let cond2 = a === b;
// AND operator
console.log("cond1 && cond2 = ",cond1 && cond2);
// OR operator
console.log("cond1 || cond2 = ",cond1 || cond2);
// NOT operator
let test = cond1 || cond2;
console.log("cond1 ! cond2 = ",!test);