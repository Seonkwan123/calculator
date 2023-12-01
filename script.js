const firstNumArray = [];
const outputArray = [];
const secondNumArray = [];

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
        outputArray.push(Number(e.target.innerText));
        displayInput.innerText = outputArray.join('');
        firstNumArray.push(Number(e.target.innerText))
        num1 = Number(firstNumArray.join(''));
    } 

    if(isNaN(Number(e.target.innerText)) && e.target.innerText !== '=') {
        operator = e.target.innerText;
        outputArray.push(e.target.innerText);
        displayInput.innerText = outputArray.join('');
    }

    if(operator && !isNaN(Number(e.target.innerText))) {
        outputArray.push(e.target.innerText);
        displayInput.innerText = outputArray.join('');
        secondNumArray.push(Number(e.target.innerText))
        num2 = Number(secondNumArray.join(''));
    }
    if(e.target.innerText == '=' || (isNaN(Number(e.target.innerText)) && operator && num2)) {
        answer = executeMath(operator)
        displayAnswer.innerText = answer;
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