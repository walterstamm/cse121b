/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1,number2){
    return number1 + number2;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1,addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click',addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1,number2){
    return number1 - number2;
}

function subtractNumbers(){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1,subtractNumber2);    
}
document.querySelector('#subtractNumbers').addEventListener('click',subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1,number2) => number1 * number2;

const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyNumber1,multiplyNumber2); 
}
document.querySelector('#multiplyNumbers').addEventListener('click',multiplyNumbers);



/* Open Function Use - Divide Numbers */
function divide(number1,number2){
    return number1 / number2;
}

//make the function to divide numbers, but as a  arrow function
const divideNumbers = () => {
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(divideNumber1,divideNumber2);
}
document.querySelector('#divideNumbers').addEventListener('click',divideNumbers);

/* Decision Structure */

const date = new Date();
const year = date.getFullYear();
document.querySelector('#year').textContent = year; 

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').textContent = numbersArray;


/* Output Odds Only Array */
const oddsNumbers = numbersArray.filter(number => number % 2 !== 0);
document.querySelector('#odds').textContent = oddsNumbers;

/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.querySelector('#evens').textContent = evenNumbers;

/* Output Sum of Org. Array */
const sumNumbers = numbersArray.reduce((total,number) => total + number);
document.querySelector('#sumOfArray').textContent = sumNumbers;

/* Output Multiplied by 2 Array */
const multipliedNumbers = numbersArray.map(number => number * 2);
document.querySelector('#multiplied').textContent = multipliedNumbers;

/* Output Sum of Multiplied by 2 Array */
const sumMultipliedNumbers = multipliedNumbers.reduce((total,number) => total + number);
document.querySelector('#sumOfMultiplied').textContent = sumMultipliedNumbers;
