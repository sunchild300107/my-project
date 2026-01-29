// inputs

const input1 = document.getElementById('input-first-number');
const input2 = document.getElementById('input-second-number');

// buttons

const button_plus = document.getElementById('button-plus');
const button_minus = document.getElementById('button-minus');
const button_multiply = document.getElementById('button-multiply');
const button_divide = document.getElementById('button-divide');
const button_calculate = document.getElementById('button-calculate');

// listeners

button_plus.addEventListener('click', onOperationButtonClick);
button_minus.addEventListener('click', onOperationButtonClick);
button_multiply.addEventListener('click', onOperationButtonClick);
button_divide.addEventListener('click', onOperationButtonClick);


// functions

function makeOperation(operator) {

const number1 = Number(input1.value);
const number2 = Number(input2.value);

    if (operator === '+') {
        const result = number1 + number2;
 window.alert(result);
    }
    else if (operator === '-') {
        const result = number1 - number2;
         window.alert(result);
    }
     else if (operator === '*') {
        const result = number1 * number2;
         window.alert(result);
    }
    else if (operator === '/') {
        const result = number1 / number2;
         window.alert(result);
    }
    else {
        window.alert('Please select an operator first.');   
    }     
}

// function onButtonPlusClick() {
//     makeOperation('+');
// }

// function onButtonMinusClick() {
//     makeOperation('-');
// }

// function onButtonMultiplyClick() {
//     makeOperation('*');
// }

// function onButtonDivideClick() {
//     makeOperation('/');
// }

// INFO - eventObject це те що створюється і передається браузером при виникненні події.
// З нього ми можемо отримати інформацію про те, яка саме кнопка була натиснута і інші деталі події.

function onOperationButtonClick(eventObject) {
    const clickedButton = eventObject.currentTarget;
    const operator = clickedButton.innerHTML;
    makeOperation(operator);
}