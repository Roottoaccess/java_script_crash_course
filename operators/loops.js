// console.log("Loops");
// Writing apna collage 3 times
// for(let i = 1; i <= 5; i++)
// {
//     console.log("Apna collage");
// }
// console.log("Loop has ended !");

// calculate sum of 1 to 5
/*
let num = prompt("Enter the ending value: ");
let sum = 0;
for(let i = 1; i <= num; i++){
    sum += i;
}
console.log("The result is: ",sum);
*/
/* This is a while loop example */
let i = 1;
// while(i <= 10){
//     console.log("i = ",i);
//     i++;
// }
/* This is a do while loop where we check the condition after passing atleast one walue */
// do{
//     console.log("i = ",i);
//     i++;
// } while(i <= 5);

// for-of loop
// finding the size of the string
// let str = "ApnaCollage";
// let size = 0;
// for(let i of str)
// {
//     console.log("i = ",i);
//     size++;
// }
// console.log("size of the string: ",size);

// for-in-loop
const student = {
    name: "Biswarup Dutta",
    age: 24,
    cgpa: 9.48,
    isPass: true,
};

for(let key in student){
    console.log("key = ",key," value=",student[key]);
}
