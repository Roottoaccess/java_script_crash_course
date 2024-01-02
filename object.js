// Creating an object using javascript
const student = {
    name: "Biswarup Dutta",
    age : 23,
    cgpa: 9.42,
    isPass: true,
};

console.log(student["isPass"]);
console.log(student.cgpa);
student.age = student.age + 1;
console.log(student);