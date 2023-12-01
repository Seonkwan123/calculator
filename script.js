const outputArray = [];

let num1;
let operator;
let num2;

const input = document.querySelector('.input')
const answer = document.querySelector('.answer')
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', output)
})

function output(e) {
    if(!isNaN(Number(e.target.innerText)) && !operator) {
        num1 = Number(e.target.innerText);
        outputArray.push(Number(e.target.innerText));
        input.innerText = outputArray.join('');
    } 

    if(isNaN(Number(e.target.innerText)) && e.target.innerText !== '=') {
        operator = e.target.innerText;
        outputArray.push(e.target.innerText);
        input.innerText = outputArray.join('');
    }

    if(operator && !isNaN(Number(e.target.innerText))) {
        num2 = Number(e.target.innerText);
        executeMath(operator)
        outputArray.push(e.target.innerText);
        input.innerText = outputArray.join('');
    }
}

function executeMath(operator) {
    if (operator == '+') add(num1,num2);
    if (operator == '-') subtract(num1,num2);
    if (operator == '%') divide(num1,num2);
    if (operator == 'x') multiply(num1,num2);
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