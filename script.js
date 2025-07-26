'use strict';

const num = document.querySelectorAll('.num');
const operand = document.querySelectorAll('.operand');
const clear = document.getElementById('clear');
const backspace = document.getElementById('backspace');
const percent = document.getElementById('percent');
const dot = document.getElementById('dot');
const equal = document.getElementById('equal');
const display = document.getElementById('display')
const historyLog = document.getElementById('history-log');
const clearHistory = document.getElementById('clear-history');

const operators = ['+', '-', '×', '÷'];

const calculator = {
    displayValue: '0',
    oldValue: '',
    operator: '',

    append(char) {
        const lastChar = this.displayValue.slice(-1);

        // Checks for 2 decimals in the display
        if (char === '.' && this.displayValue.includes('.')) {
            alert('Cannot have 2 decimals.');
            return;
        }

        if (this.displayValue === '0' && operators.includes(char)) {
            alert('Cannot start with an operator.');
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
        let numArray = this.displayValue.split(/[+\-×÷]/).map(parseFloat);
        let operandArray = this.displayValue.match(/[+\-×÷]/g) || [];
        const originalExpression = this.displayValue;
        let finalResult;
        
        // First pass: handle × and ÷
        for (let i = 0; i < operandArray.length; i++) {
            if (operandArray[i] === '×' || operandArray[i] === '÷') {
                const a = numArray[i];
                const b = numArray[i + 1];
                let result;

                if (operandArray[i] === '×') {
                    result = a * b;
                } else {
                    if (b === 0) {
                        alert("Error: Division by zero.");
                        this.clear();
                        return;
                    }
                    result = a / b;
                }

                numArray.splice(i, 2, result);  // Replace a and b with the result
                operandArray.splice(i, 1);      // Remove operator that was just handled
                i--; // Adjust index to stay in place
            }
        }

        // Second pass: handle + and -
        for (let i = 0; i < operandArray.length; i++) {
            if (operandArray[i] === '+' || operandArray[i] === '-') {
                const c = numArray[i];
                const d = numArray[i + 1];
                let result;

                if (operandArray[i] === '+') {
                    result = c + d;
                } else {
                    result = c - d;
                }

                numArray.splice(i, 2, result);
                operandArray.splice(i, 1);
                i--; 
            }
        }

        finalResult = numArray[0].toString();
        this.displayValue = finalResult;
        this.updateDisplay();

        // Append history log
        const historyEntry = document.createElement('p');
        historyEntry.textContent = `${originalExpression} = ${finalResult}`;
        historyLog.appendChild(historyEntry);
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

clearHistory.addEventListener('click', () => {
    [...historyLog.children].forEach(child => {     // Spread operator
        if (child.tagName === 'P') {
            child.remove();
        }
    });
});

// Click event for other buttons
clear.addEventListener('click', () => calculator.clear());
backspace.addEventListener('click', () => calculator.backspace());
dot.addEventListener('click', () => calculator.append('.'));
equal.addEventListener('click', () => calculator.compute());
percent.addEventListener('click', () => calculator.percent());