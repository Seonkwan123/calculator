let firstNumString = '';
let secondNumString = '';
let outputString = ''; 

let num1;
let operator;
let num2;
let answer;



const displayInput = document.querySelector('.display-input')
const displayAnswer = document.querySelector('.display-answer')
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', output)
})

function output(e) {
    if(!isNaN(Number(e.target.innerText)) && !operator) {
        firstNumString += e.target.innerText;
        outputString += e.target.innerText;
        displayInput.innerText = outputString;
        num1 = Number(firstNumString);
    } 

    if(isNaN(Number(e.target.innerText)) && e.target.innerText !== '=' && e.target.innerText !== '.') {
        operator = e.target.innerText;
        outputString += e.target.innerText;
        displayInput.innerText = outputString;
        operator = e.target.innerText;
    }

    if(operator && !isNaN(Number(e.target.innerText))) {
        secondNumString += e.target.innerText;
        outputString += e.target.innerText;
        displayInput.innerText = outputString;
        num2 = Number(secondNumString);
    }

    if(e.target.innerText == '.') createDecimal(e.target.innerText);

    if(e.target.innerText == '=' || (isNaN(Number(e.target.innerText)) && operator && num2) && e.target.innerText !== '.') {
        answer = executeMath(operator)
        displayAnswer.innerText = answer;
    }
}

function createDecimal(decimal) {
    if (!num2 && num2 !== 0) {
        firstNumString += '.'
        outputString += decimal;
        displayInput.innerText = outputString;
        num1 = Number(firstNumString);
    } else if (num2 || num2 === 0) {
        secondNumString += '.'
        outputString += decimal;
        displayInput.innerText = outputString;
        num2 = Number(secondNumString);
    }
}

function executeMath(operator) {
    if (operator == '+') return add(num1,num2);
    if (operator == '-') return subtract(num1,num2);
    if (operator == '%') return divide(num1,num2);
    if (operator == 'x') return multiply(num1,num2);
}




function add(num1,num2) {
    return num1 + num2;
}

function subtract(num1,num2) {
    return num1 - num2;
}

function divide(num1,num2) {
    return num1 / num2;
}

function multiply(num1,num2) {
    return num1 * num2;
}

function operate(num1,operator,num2) {
    if (operator == '+') add(num1, num2);
    if (operator == '-') suntract(num1, num2);
    if (operator == '%') divide(num1, num2);
    if (operator == 'x') multiply(num1, num2);
}