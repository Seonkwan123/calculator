let num1;
let operator;
let num2;

// Create 1 through 9 buttons using a loop
let calculator = document.querySelector('.calculator')
for (let i = 1; i < 10; i++) {
    let button = document.createElement('button')
    button.className = `${i}-button`
    button.textContent = `${i}`
    calculator.appendChild(button);
}

function add(num1,num2) {
    return num1 + num2;
}

function subtract(num1,num2) {
    return num1 + num2;
}

function divide(num1,num2) {
    return num1 / num2;
}

function multiply(num1,num2) {
    return num1 * num2;
}

function operate(num1,operator,num2) {
    if (operator = '+') add(num1, num2);
    if (operator = '-') suntract(num1, num2);
    if (operator = '/') suntract(num1, num2);
    if (operator = '*') suntract(num1, num2);
}