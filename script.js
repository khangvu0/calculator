'use strict';

const num = document.querySelectorAll('.num');
const operand = document.querySelectorAll('.operand');
const clear = document.getElementById('clear');
const backspace = document.getElementById('backspace');
const percent = document.getElementById('percent');
const dot = document.getElementById('dot');
const equal = document.getElementById('equal');

const calculator = {
    displayValue: '0',

    append(char) {

    },

    updateDisplay() {

    },

    backspace() {

    },

    clear(){

    },

    percent() {

    },

    compute() {

    }
};

// Click event for each number button 
num.forEach(btn =>
    btn.addEventListener('click', () => {
        calculator.append(btn.textContent);
    })
);

// Click event for each operand button
operand.forEach(btn =>
    btn.addEventListener('click', () => {
        calculator.append(btn.textContent);
    })
);

// Click event for other buttons
clear.addEventListener('click', () => calculator.clear());
backspace.addEventListener('click', () => calculator.backspace());
dot.addEventListener('click', () => calculator.append('.'));
equal.addEventListener('click', () => calculator.calculate());
percent.addEventListener('click', () => calculator.makePercent());