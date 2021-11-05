console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1
/* let num = 8;
let input = parseInt(prompt("Please input a number between 1 - 12:"));

if (isNaN(input)) {
    alert("Please give me a whole number!");
} else {
    if (input < num) {
        alert("The number is too low!");
    } else if (input > num) {
        alert("The number is too high!");
    } else {
        alert("Congrats! You guessed the correct number!")
    }
} */

// Exercise 2
let userInput2 = prompt("What's your favorite color");
switch (userInput2.toLocaleLowerCase()) {
    case "blue":
        console.log("Blue!");
    break;
    case "yellow": 
        console.log("Yellow!");
        break;
    case "red":
        console.log("Red!");
        break;
    case "orange":
        console.log("Orange!");
        break;
    case "green": 
        console.log("Green!");
        break;
    default:
        console.log("Pick a different color.");
}
