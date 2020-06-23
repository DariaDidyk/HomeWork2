"use strict";
function myFunction1() {
let number1 = prompt('Please enter first number:');
console.log(number1);
let number2 = prompt('Please enter second number:');
console.log(number2);
let number3 = prompt('Please enter first number:');
console.log(number3);
const middle = (Number(number1) + Number(number2) + Number(number3)) / 3;
console.log(middle);
}

function myFunction2() {
    let userNumber = prompt('Please enter three numbers separated by commas:');
    console.log(userNumber);
    const numbers = userNumber.split(',');
    const middle = (Number(numbes[0]) + Number(numbers[1]) + Number(numbes[2])) / 3;
    console.log(middle);
}


function myFunction() {
    let yearOfBirth = prompt("Please enter your year of birth:");
    console.log(yearOfBirth);

}   