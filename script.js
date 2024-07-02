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
    if (operator === null || operator === undefined) {
        return alert('No operator specified');
    };
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

    if(target.tagName === 'BUTTON') {
        console.log(target.innerText)
    };
});