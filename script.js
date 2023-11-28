let num1;
let operator;
let num2;


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