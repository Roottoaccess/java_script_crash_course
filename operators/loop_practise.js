// Printi all even numbers from 0 to 100
// for(let i = 0; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// Create a game where you start with any random
// game number . Ask the user to keep guessing 
// the game number until the user enteres correct
// value

const gameNum = 25;

let userNum = prompt("Guess the game number: ");

while(userNum != gameNum){
    userNum = prompt("You entered wrong number guess again: ");
}
console.log("You entered the currect number !");