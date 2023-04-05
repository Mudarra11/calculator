function add(a, b) {
    return displayValue.textContent = +a + +b;
}

function substract(a, b) {
    return displayValue.textContent = +a - +b;
}

function multiply(a, b) {
    return displayValue.textContent = +a * +b;
}

function divide(a, b) {
    return displayValue.textContent = +a / +b;
}

let a = null;
let b = null;
let operator = null;

function operate(a, operator, b) {
    if (operator === "+") return add(a, b); 
    else if (operator === "-") return substract(a, b);
    else if (operator === "*") return multiply(a, b);
    else if (operator === "/") return divide(a, b);
}

const calculator = document.querySelector('#calculator');

let displayValue = calculator.querySelector('#display');

const zero = calculator.querySelector('#zero');
zero.addEventListener('click', function(e) { displayValue.textContent += 0;})
const one = calculator.querySelector('#one');
one.addEventListener('click', function(e) { displayValue.textContent += 1;})
const two = calculator.querySelector('#two');
two.addEventListener('click', function(e) { displayValue.textContent += 2;})
const three = calculator.querySelector('#three');
three.addEventListener('click', function(e) { displayValue.textContent += 3;})
const four = calculator.querySelector('#four');
four.addEventListener('click', function(e) { displayValue.textContent += 4;})
const five = calculator.querySelector('#five');
five.addEventListener('click', function(e) { displayValue.textContent += 5;})
const six = calculator.querySelector('#six');
six.addEventListener('click', function(e) { displayValue.textContent += 6;})
const seven = calculator.querySelector('#seven');
seven.addEventListener('click', function(e) { displayValue.textContent += 7;})
const eight = calculator.querySelector('#eight');
eight.addEventListener('click', function(e) { displayValue.textContent += 8;})
const nine = calculator.querySelector('#nine');
nine.addEventListener('click', function(e) { displayValue.textContent += 9;})

const addOperator = calculator.querySelector('#add')
addOperator.addEventListener('click', function(e) { 
    operator = "+";
    if (!(a === null)) { 
        b = displayValue.textContent;
        displayValue.replaceChildren();
        operate(a, operator, b);
        a = displayValue.textContent;
    
    } else {
        a = displayValue.textContent; 
        displayValue.replaceChildren();
        
    }})
const substractOperator = calculator.querySelector('#substract')
substractOperator.addEventListener('click', function(e) { 
    operator = "-";
    a = displayValue.textContent;
    displayValue.replaceChildren();})
const multiplyOperator = calculator.querySelector('#multiply')
multiplyOperator.addEventListener('click', function(e) { 
    operator = "*";
    a = displayValue.textContent;
    displayValue.replaceChildren();})
const divideOperator = calculator.querySelector('#divide')
divideOperator.addEventListener('click', function(e) { 
    operator = "/";
    a = displayValue.textContent;
    displayValue.replaceChildren();})

const clear = calculator.querySelector('#clear')
clear.addEventListener('click', function(e) { 
    displayValue.replaceChildren();
    operator = null;})
const equals = calculator.querySelector('#equals')
equals.addEventListener('click', function(e) {
    b = displayValue.textContent;
    operate(a, operator, b)
    operator = null;
})



//
