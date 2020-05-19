// function for add
function add(num1, num2) {
    return num1 + num2;
}
// function for subtract
function subtract(num1, num2) {
    return num1 - num2;
}
// function for multiply
function multiply(num1, num2) {
    return num1 * num2;
}
// function for divide
function divide(num1, num2) {
    return num1 / num2;
}
// "operate" function
function operate(sign, num1, num2) {
    switch (sign) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
        default:
            console.log("Please select a valid operator");
        }
    }
}