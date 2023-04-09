function add(a, b) {
    return solution = Math.round((+a + +b) * 10000) / 10000;
}

function substract(a, b) {
    return solution = Math.round((+a - +b) * 10000) / 10000;
}

function multiply(a, b) {
    return solution = Math.round((+a * +b) * 10000) / 10000;
}

function divide(a, b) {
    if (b === '0') {
        solution = "Can't divide by 0"
    } else {
        solution = Math.round((+a / +b) * 10000) / 10000;
    }
}

let a = null;
let b = null;
let operator = null;
let solution = null;



function operate(a, operator, b) {
    if (operator === "+") return add(a, b); 
    else if (operator === "-") return substract(a, b);
    else if (operator === "*") return multiply(a, b);
    else if (operator === "/") return divide(a, b);
}

const calculator = document.querySelector('#calculator');

let displayValue = calculator.querySelector('#display');

const zero = calculator.querySelector('#zero');
zero.addEventListener('click', function(e) { if (+displayValue.textContent === solution) {
    displayValue.replaceChildren();}
    displayValue.textContent += 0;})
const one = calculator.querySelector('#one');
one.addEventListener('click', function(e) { if (+displayValue.textContent === solution) {
    displayValue.replaceChildren();}
    displayValue.textContent += 1;})
const two = calculator.querySelector('#two');
two.addEventListener('click', function(e) { if (+displayValue.textContent === solution) {
    displayValue.replaceChildren();}
    displayValue.textContent += 2;})
const three = calculator.querySelector('#three');
three.addEventListener('click', function(e) { if (+displayValue.textContent === solution) {
    displayValue.replaceChildren();}
    displayValue.textContent += 3;})
const four = calculator.querySelector('#four');
four.addEventListener('click', function(e) { if (+displayValue.textContent === solution) {
    displayValue.replaceChildren();}
    displayValue.textContent += 4;})
const five = calculator.querySelector('#five');
five.addEventListener('click', function(e) { if (+displayValue.textContent === solution) {
    displayValue.replaceChildren();}
    displayValue.textContent += 5;})
const six = calculator.querySelector('#six');
six.addEventListener('click', function(e) { if (+displayValue.textContent === solution) {
    displayValue.replaceChildren();}
    displayValue.textContent += 6;})
const seven = calculator.querySelector('#seven');
seven.addEventListener('click', function(e) { if (+displayValue.textContent === solution) {
    displayValue.replaceChildren();}
    displayValue.textContent += 7;})
const eight = calculator.querySelector('#eight');
eight.addEventListener('click', function(e) { if (+displayValue.textContent === solution) {
    displayValue.replaceChildren();}
    displayValue.textContent += 8;})
const nine = calculator.querySelector('#nine');
nine.addEventListener('click', function(e) { if (+displayValue.textContent === solution) {
    displayValue.replaceChildren();}
    displayValue.textContent += 9;})
const dot = calculator.querySelector('#dot');
dot.addEventListener('click', function(e) { if (+displayValue.textContent === solution) {
        displayValue.replaceChildren();}
        displayValue.textContent += '.' ;})

const addOperator = calculator.querySelector('#add')
addOperator.addEventListener('click', function(e) { 
    if (operator === "=") {
        a = displayValue.textContent; 
        solution = +a;
        operator = "+";
    } else if (!(operator === "+") && !(a === null)) {
        b = displayValue.textContent;
        operate(a, operator, b);
        displayValue.textContent = solution;
        a = displayValue.textContent; 
        operator = "+";
    } else if (!(a === null)) { 
        operator = "+";
        b = displayValue.textContent;
        operate(a, operator, b);
        displayValue.textContent = solution;
        a = displayValue.textContent; 
    } else {
        a = displayValue.textContent; 
        solution = +a;
        operator = "+";
    }})
const substractOperator = calculator.querySelector('#substract')
substractOperator.addEventListener('click', function(e) { 
    if (operator === "=") {
        a = displayValue.textContent; 
        solution = +a;
        operator = "-";
    } else if (!(operator === "-") && !(a === null)) {
        b = displayValue.textContent;
        operate(a, operator, b);
        displayValue.textContent = solution;
        a = displayValue.textContent;
        operator = "-";
    } else if (!(a === null)) { 
        operator = "-";
        b = displayValue.textContent;
        operate(a, operator, b);
        displayValue.textContent = solution;
        a = displayValue.textContent; 
    } else {
        a = displayValue.textContent; 
        solution = +a;
        operator = "-";
    }})
const multiplyOperator = calculator.querySelector('#multiply')
multiplyOperator.addEventListener('click', function(e) { 
    if (operator === "=") {
        a = displayValue.textContent; 
        solution = +a;
        operator = "*";
    } else if (!(operator === "*") && !(a === null)) {
        b = displayValue.textContent;
        operate(a, operator, b);
        displayValue.textContent = solution;
        a = displayValue.textContent; 
        operator = "*";
    } else if (!(a === null)) { 
        operator = "*";
        b = displayValue.textContent;
        operate(a, operator, b);
        displayValue.textContent = solution;
        a = displayValue.textContent; 
    } else {
        a = displayValue.textContent; 
        solution = +a;
        operator = "*";
    }})
const divideOperator = calculator.querySelector('#divide')
divideOperator.addEventListener('click', function(e) { 
    if (operator === "=") {
        a = displayValue.textContent; 
        solution = +a;
        operator = "/";
    } else if (!(operator === "/") && !(a === null)) {
        b = displayValue.textContent;
        operate(a, operator, b);
        displayValue.textContent = solution;
        a = displayValue.textContent; 
        operator = "/";
    } else if (!(a === null)) { 
        operator = "/";
        b = displayValue.textContent;
        operate(a, operator, b);
        displayValue.textContent = solution;
        a = displayValue.textContent; 
    } else {
        a = displayValue.textContent; 
        solution = +a;
        operator = "/";
    }})

const clear = calculator.querySelector('#clear')
clear.addEventListener('click', function(e) { 
    displayValue.replaceChildren();
    operator = null;
    a = null;
    b = null;
})
const equals = calculator.querySelector('#equals')
equals.addEventListener('click', function(e) {
    b = displayValue.textContent;
    operate(a, operator, b)
    displayValue.textContent = solution;
    operator = "=";
})




