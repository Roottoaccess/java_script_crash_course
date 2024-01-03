// Strings in javascript
let str = "ApnaCollage";

// To find the length of the string
console.log("The length of the string: ",str.length);

// String indices
console.log("Position: ",str[0],str[1]);

// Template Literals
// Speacial String
let sentence = `This is a template literal`;
console.log(sentence);

// creating an object
let obj = {
    item: "pen",
    price: 10,
};
// string interpolation
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

// Escape character
console.log("First line\nsecond line");

//string functions / method
// Converting the string in upper case
let st = "Magic";
console.log(st.toUpperCase());
// Converting the string in lower case
console.log(st.toLowerCase());
// To remove all the whitespace we use trime
let test = "       This is a testing string   ";
console.log(test.trim());

// Slice method returns part of the string
console.log(st.slice(0,4));

// concat to joint 2 string
let str1 = "Iron";
let str2 = "Man";

console.log(str1.concat(str2));

// replace method
console.log(str1.replace("I","P"));
// replaceAll

// CharAt
console.log(str1.charAt(2));