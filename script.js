const display = document.querySelector('.display');
const buttons = document.querySelector('.input-box');

let num1 = null;
let num2 = null;
let operator = null;

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function operate(num1, num2, operator) {
    if (operator === '+') {
        return add(num1, num2);
    };
    if (operator === '-') {
        return subtract(num1, num2);
    };
    if (operator === '*') {
        return multiply(num1, num2);
    };
    if (operator === '/') {
        return divide(num1, num2);
    };
};

buttons.addEventListener('click', event => {
    const target = event.target;

    if(target.className.includes('num-btn')) {
        if(operator !== '') {
            if(num2 !== '') {
                num2 += target.innerText;
                display.innerText += target.innerText;
            } else {
                num2 = target.innerText;
                display.innerText = target.innerText;
            };
            console.log('Num2: ' + num2);
        } else {
            if(num1 !== '') {
                num1 += target.innerText;
                display.innerText += target.innerText;
            } else {
                num1 = target.innerText;
                display.innerText = target.innerText;
            };
            console.log('Num1: ' + num1);
        };
    };
});