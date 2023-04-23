// functions
function add(mainNumber, targetNumber) {
  return mainNumber + targetNumber;
}

function subtract(mainNumber, targetNumber) {
  return mainNumber - targetNumber;
}

function multiply(mainNumber, targetNumber) {
  return mainNumber * targetNumber;
}

function divide(mainNumber, targetNumber) {
  return mainNumber / targetNumber;
}

// variables
let number = '';
let operator;
let number2;

// operator function
function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case 'x':
      return multiply(num1, num2);
    case '÷':
      return divide(num1, num2);
  }
}

// display
const display = document.querySelector('.display');
display.textContent = '';

// number buttons
const numberBtns = document.querySelectorAll('.number');

numberBtns.forEach((numberBtn) =>
  numberBtn.addEventListener('click', () => {
    number = number ? number + numberBtn.textContent : numberBtn.textContent;
    display.textContent = number;
  })
);

// operator buttons
const operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener('click', () => {
    const operatorValue = operatorBtn.textContent;
    if (operatorValue === '=') {
      if (operator && number2) {
        const result = operate(
          operator,
          parseFloat(number),
          parseFloat(number2)
        );
        number = result;
        number2 = '';
        operator = '';
        display.textContent = number;
      } else {
        alert('Invalid input!');
      }
    } else if (operatorValue === 'AC') {
      number = '';
      number2 = '';
      operator = '';
      display.textContent = '';
    } else {
      operator = operatorValue;
      number2 = number;
      number = '';
    }
  });
});
