# Rock Paper Scissors

This is a repository for my take on the classic game Rock, Paper, Scissors. The timeline of this assignment spanned four days and served as a learning opportunity to deepen my understanding of JavaScript objects and DOM manipulation.

## Live Demo

You can view a live demo of the website [here](https://calculator-alpha-kohl-41.vercel.app/).

## Technologies Used

- HTML
- CSS
- JavaScript

## Features

- Basic Arithmetic Operations – Supports addition, subtraction, multiplication, and division.
- PEMDAS Support – Performs calculations following proper operator precedence rules (PEMDAS), allowing multi-operand expressions (e.g., 4 × 5 - 10 ÷ 2).
- Clear & Backspace – Delete the entire expression or a single character.
- Percent Conversion – Quickly convert a number to its percentage.
- Decimal Input Handling – Prevents invalid decimal entries.
- Operator Validation – Prevents duplicate or incorrect operator placement.
- Calculation History – Automatically logs previous expressions and results.
- Clear History Button – Clear all past calculations with one click.
- Responsive Design – Optimized layout for mobile, tablet, and desktop.
- Scroll-Enabled History – Keeps history scrollable to maintain a clean layout on all screen sizes.

## Lessons Learned

I wanted to challenge myself to leverage JavaScript objects for this project. As this is my first experience working with objects in JavaScript, there were many valuable takeaways, including:

- Updating the DOM dynamically based on user interaction.
- Preventing input errors and handling edge cases like division by zero.
- Handling content overflow cleanly with overflow-y: auto.
- You can directly paste symbols like ⌫ (backspace) into HTML without needing Unicode references.
- Learned how to use parseFloat() to safely convert strings to numbers for arithmetic.
- Leveraged .slice() to implement backspace functionality cleanly.
- Arrow functions and this context:
When calling object methods via event listeners, wrapping them in arrow functions ensures this still refers to the object:

## Screenshot

![Screenshot 1](/images/preview.png)