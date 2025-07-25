'use strict';

const num = document.querySelectorAll('.num');
const operand = document.querySelectorAll('.operand');
const clear = document.getElementById('clear');
const backspace = document.getElementById('backspace');
const percent = document.getElementById('percent');
const dot = document.getElementById('dot');
const equal = document.getElementById('equal');
const display = document.getElementById('display')

const operators = ['+', '-', '×', '÷'];

const calculator = {
    displayValue: '0',
    oldValue: '',

    append(char) {
        const lastChar = this.displayValue.slice(-1);

        // Checks for 2 decimals in the display
        if (char === '.' && this.displayValue.includes('.')) {
            alert('Cannot have 2 decimals.');
            return;
        }

        // Checks for 2 operands in a row
        if (operators.includes(char) && operators.includes(lastChar)) {
            alert('Cannot have 2 operators in a row.')
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
        let tempVal = parseFloat(this.displayValue);

        if (!isNaN(tempVal)) {
            tempVal /= 100;
            this.displayValue = tempVal.toString();
            this.updateDisplay();
        }
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
equal.addEventListener('click', () => calculator.compute());
percent.addEventListener('click', () => calculator.percent());