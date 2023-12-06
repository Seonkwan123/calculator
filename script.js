let firstNumString = '0';
let secondNumString = '';
let outputString = '0'; 

let num1 = 0;
let operator;
let num2;
let answer;



const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');
const displayInput = document.querySelector('.display-input')
const displayAnswer = document.querySelector('.display-answer')
const buttons = document.querySelectorAll('.btn');

displayAnswer.innerText = outputString;

buttons.forEach(button => {
    button.addEventListener('click', output)
})
clearBtn.onclick = clear;
deleteBtn.onclick = deleteNum;

function deleteNum() { 
    if (firstNumString === '0') return;
    if ((num1 || num1 ===0) && !operator) {
        firstNumString = firstNumString.slice(0, -1);
        outputString = outputString.slice(0,-1)
        num1 = Number(firstNumString);
        displayAnswer.innerText = firstNumString;
    } else if(num2 || num2 === 0){
        if(!secondNumString) return;
        secondNumString = secondNumString.slice(0,-1);
        outputString = outputString.slice(0,-1)
        num2 = Number(secondNumString);
        displayAnswer.innerText = secondNumString;
    }
    
}

function clear () {
    [num1,firstNumString, outputString] = [0 ,'0', '0'];
    [operator, num2, secondNumString] = [null, null, ''];
    displayInput.innerText = '';
    displayAnswer.innerText = outputString;
}

function output(e) {
    if(!isNaN(Number(e.target.innerText)) && !operator) {
        if (e.target.innerText === '0' && firstNumString === '0') return;
        else if(answer || answer === 0) {
            resetAnswer(e.target.innerText);
        } else {
        [num1, firstNumString] = updateNum(e.target.innerText, firstNumString, num1)
        outputString = firstNumString;
        }
    } 

    else if(isNaN(Number(e.target.innerText)) && e.target.innerText !== '=' && e.target.innerText !== '.') {
        if (operator && (num2 || num2 === 0)) {
            answer = executeMath(operator);
            resetVariable();
        }
        updateOperator(e.target.innerText)
    }

     else if(operator && !isNaN(Number(e.target.innerText))) {
        if (e.target.innerText === '0' && secondNumString === '0')return;  
        if (!secondNumString) displayAnswer.innerText = '';
        [num2, secondNumString] = updateNum(e.target.innerText, secondNumString, num2);
        outputString += e.target.innerText;
    }

    else if(e.target.innerText == '.') {
        createDecimal(e.target.innerText);
    }

    else if(e.target.innerText == '=' && (num2 || num2 === 0)) {
        answer = executeMath(operator)
        resetVariable();
    }
}

function updateNum(target, numString, num) {
    if (numString === '0') numString = target;
    else numString += target;
    displayAnswer.innerText = numString;
    num = Number(numString);
    return [num, numString];
}

function updateOperator(target) {
    if(operator) {
        operator = target;
        outputString = outputString.slice(0,-1);
        outputString += target;
        displayInput.innerText = outputString
    } else {
    operator = target;
    outputString += target;
    displayInput.innerText = outputString;
    }
}

function createDecimal(decimal) {
    if (!operator) {
        if (firstNumString.includes(decimal)) return; // return if decimal already incldued
        if (!num1 && num1 !== 0) {                            // This if statement checks whether decimal is the first to be pressed or not.
            outputString += 0 + decimal;
            firstNumString += 0 + decimal;
            displayAnswer.innerText += 0 + decimal;
        } 
        else { 
            firstNumString += decimal;
            outputString += decimal;
            displayAnswer.innerText += decimal;
        }
    } else if (operator) {
        if (secondNumString.includes(decimal)) return; // return if decimal already incldued
        if (!num2 && num2 !== 0) {
            outputString += 0 + decimal;
            secondNumString += 0 + decimal;
            displayAnswer.innerText += 0 + decimal;
        } else {
            secondNumString += decimal;
            outputString += decimal;
            displayAnswer.innerText += decimal;
        } 
        displayAnswer.innerText = '' // if decimal pressed first after operator, reset the answer displayed on screen
        displayAnswer.innerText += secondNumString;
    }
}

function resetVariable() {
    displayInput.innerText = outputString + ' = ';
    displayAnswer.innerText = answer;
    [num1,firstNumString, outputString] = [answer ,`${answer}`,`${answer}`];
    [operator, num2, secondNumString] = [null, null, ''];
}

function resetAnswer(target) {
    outputString = target;
    displayInput.innerText = '';
    displayAnswer.innerText = outputString;
    firstNumString = target;
    num1 = Number(firstNumString);
    [operator, num2, secondNumString] = [null, null, ''];
    answer = null;
}

function executeMath(operator) {
    if (operator == '+') return add(num1,num2);
    if (operator == '-') return subtract(num1,num2);
    if (operator == '%') return divide(num1,num2);
    if (operator == 'x') return multiply(num1,num2);
}




function add(num1,num2) {
    return ((num1 *10) + (num2 * 10))/10;
}

function subtract(num1,num2) {
    return ((num1 *10) - (num2 * 10))/10;
}

function divide(num1,num2) {
    return ((num1 *10) / (num2 * 10))/10;
}

function multiply(num1,num2) {
    return ((num1 *10) * (num2 * 10))/10;
}

function operate(num1,operator,num2) {
    if (operator == '+') add(num1, num2);
    if (operator == '-') suntract(num1, num2);
    if (operator == '%') divide(num1, num2);
    if (operator == 'x') multiply(num1, num2);
}