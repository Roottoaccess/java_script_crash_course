/* This is a practise problem of array
For a given array with marks of student ->
[85,97,44,37,76,60] find the average marks
of the entire class. */

// Creating a student array
let student = [85,97,44,37,76,60];
let sum = 0;
let avg;
/* for(let i = 0; i < student.length; i++){
    // Calculating the sum
    sum += student[i];
    // Finding the average
    avg = sum / student.length;
}
console.log("The total marks obtain: ",sum);

console.log("Average received: ",avg); */

// Another way to inbuild the logical program
for(let val of student){
    sum += val;
}
avg = sum / student.length;
console.log(`avg marks of th class = ${avg}`);