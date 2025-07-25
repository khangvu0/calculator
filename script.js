'use strict';

const num = document.querySelectorAll('.num');
const operand = document.querySelectorAll('.operand');
const clear = document.getElementById('clear');
const backspace = document.getElementById('backspace');
const percent = document.getElementById('percent');
const dot = document.getElementById('dot');
const equal = document.getElementById('equal');
const display = document.getElementById('display')

const calculator = {
    displayValue: '0',
    oldValue: '',

    append(char) {
        // Checks for 2 periods in the display
        if (char === '.' && this.displayValue.includes('.')) {
            alert('Can not have 2 decimals.');
            return;
        }

        // If display is zero, set display to char. Else append char
        if (this.displayValue === '0' && char !== '.'){
            this.displayValue = char;
        } else {
            this.displayValue += char;
        }

        this.updateDisplay()
    },

    updateDisplay() {       
        display.textContent = this.displayValue;
    },

    backspace() {
        if (this.displayValue.length > 1) {
            this.displayValue = this.displayValue.slice(0, -1);
        } else {
            this.displayValue = '0';
        }
        this.updateDisplay();
    },

    clear(){
        this.displayValue = '0';
        this.oldValue = '';
        this.updateDisplay();
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
//foreach is a shorthand for a forloop
operand.forEach(btn =>
    btn.addEventListener('click', () => {
        calculator.append(btn.textContent);
    })
);

// Click event for other buttons
clear.addEventListener('click', () => calculator.clear());
backspace.addEventListener('click', () => calculator.backspace());
dot.addEventListener('click', () => calculator.append('.'));
equal.addEventListener('click', () => calculator.calculate);
percent.addEventListener('click', () => calculator.makePercent);