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

button_plus.addEventListener('click', onButtonPlusClick);
button_minus.addEventListener('click', onButtonMinusClick);
button_multiply.addEventListener('click', onButtonMultiplyClick);
button_divide.addEventListener('click', onButtonDivideClick);
button_calculate.addEventListener('click', makeOperation);


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

function onButtonPlusClick() {
    makeOperation('+');
}

function onButtonMinusClick() {
    makeOperation('-');
}

function onButtonMultiplyClick() {
    makeOperation('*');
}

function onButtonDivideClick() {
    makeOperation('/');
}




