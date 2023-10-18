let displayValue = '';
let result = 0;

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  result = 0;
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    result = eval(displayValue);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

clearDisplay();