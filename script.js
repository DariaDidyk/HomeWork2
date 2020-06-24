function myFunction1() {
    console.info('info');
    console.dir('test');
    console.error('test');
    console.group('testGroup');
    console.log('test');
    console.groupEnd('testGroup');
    console.warn('test');
    console.time('test');
    console.log('lalala')
    console.timeEnd('test');
}

function myFunction2() {
let number1 = prompt('Please enter first number:');
console.log(number1);
let number2 = prompt('Please enter second number:');
console.log(number2);
let number3 = prompt('Please enter first number:');
console.log(number3);
const middle = (Number(number1) + Number(number2) + Number(number3)) / 3;
console.log(middle);
}

function myFunction3() {
    let userNumber = prompt('Please enter three numbers separated by commas:');
    console.log(userNumber);
    const numbers = userNumber.split(',');
    const middle = (Number(numbers[0]) + Number(numbers[1]) + Number(numbers[2])) / 3;
    console.log(middle);
}

function myFunction4() {
    let yearOfBirth = prompt('Введите год вашего рождения:');
    if (yearOfBirth.length < 4) {
        alert('Введите 4 цифры');
    } else if(+yearOfBirth > 2020) {
        alert('Введите реальный возраст!');
    } else if(+yearOfBirth < 1920) {
        alert('Введите реальный возраст!');
    }
    else {
        let userAge = 2020 - +yearOfBirth;
        console.log(userAge);
    }
}

function myFunction5() {
    let userNumber = prompt('Угдайте число от 1 до 10');
    let randomNumber = Math.floor(Math.random() * (10 - 1)) + 1;
    console.log(randomNumber);
    if (+userNumber === randomNumber) {
        alert('Вы угадали');
    } else {
        alert('Не угадали');
    }
}
