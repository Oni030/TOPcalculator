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

    if(target.className.includes('op-btn')) {
        if(operator !== '') {
            let result = operate(num1, num2, operator);
            console.log('Interim result: ' + result);
            display.innerText = result;
            num1 = result;
            num2 = '';
            operator = target.innerText;
        } else {
            operator = target.innerText;
            console.log('Operator: ' + operator);
        };
    };

    if(target.className.includes('equal-btn')) {
        if(operator !== '') {
            if(operator === '/' && num2 == 0) {
                display.innerText = "Invalid operation";
            } else {
                let result = operate(num1, num2, operator);
                let resultLength = result.toString().length;
                if(resultLength >= 11) {
                    result = result.toPrecision(7)/1;
                };
                console.log('Result: ' + result);
                display.innerText = result;
            };
            num1 = '';
            num2 = '';
            operator = '';
        };
    };

    if(target.className.includes('clear-btn')) {
        console.log('CLEAR');
        display.innerText = '0';
        num1 = '';
        num2 = '';
        operator = '';
    };
});