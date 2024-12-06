document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('calculator-display');
    const buttons = document.querySelectorAll('.calc-btn');
    const clearButton = document.getElementById('calc-clear');
    const equalsButton = document.getElementById('calc-equals');
  
    let currentInput = '';
    let operation = null;
  
    const updateDisplay = (value) => {
      display.value = value || '0';
    };
  
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const value = button.dataset.value;
        if (value) {
          currentInput += value;
          updateDisplay(currentInput);
        }
      });
    });
  
    clearButton.addEventListener('click', () => {
      currentInput = '';
      operation = null;
      updateDisplay('');
    });
  
    equalsButton.addEventListener('click', () => {
      try {
        currentInput = eval(currentInput).toString();
        updateDisplay(currentInput);
      } catch (error) {
        updateDisplay('Error');
      }
    });
  });
  