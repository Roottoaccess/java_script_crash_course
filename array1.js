// Arrays lecture started from here....
// Creating marks array

let marks = [98, 86, 84, 8, 18];

console.log(marks);
// Finding the length of the array....
console.log(marks.length);

let heroes = ["ironman", "thor", "hulk", "spiderman"];

console.log(heroes);
console.log("The length of heroes is: ",heroes.length);

// Array Indices
console.log(heroes[1 + 1]);

// updating the array by index number
marks[0] = 94;
console.log(marks);

// Looping over the array
for(let i = 0; i < heroes.length; i++){
    console.log("Heroes: ",heroes[i]);
}

// for of
for(let ele of marks){
    console.log(ele);
}

// Taking an another example of array and loop
let cities = ['kolkata','delhi','mumbai','bihar'];

for(let city of cities){
    console.log(city.toUpperCase());
}