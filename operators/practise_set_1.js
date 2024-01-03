// let name = prompt("Enter you name: ");
// console.log(name);

// Check if the number is a multiple of 5 or not
// let num = prompt("Enter the number: ");

// if(num % 5 === 0){
//     console.log("Multiple of 5 !"); 
// } else {
//     console.log("Not a multiple of 5");
// }

// wap which can give grades to students according to their scores:
let marks = prompt("Enter your marks: ");

// Checking  the conditions
if(marks >= 80 && marks <= 100){
    console.log("A");
} else if(marks >= 70 && marks <= 79){
    console.log("B");
} else if(marks >= 60 && marks <= 69){
    console.log("C");
} else if(marks >= 50 && marks <= 59){
    console.log("D");
} else if(marks >= 0 && marks <= 49){
    console.log("F");
} else {
    console.log("Enter a valid marks !");
}