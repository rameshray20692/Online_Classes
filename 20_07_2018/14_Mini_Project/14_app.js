var CalculatorApp = (function () {
    // This executes as soon as you create an Object
    function CalculatorApp() {
        CalculatorApp.initialize();
        CalculatorApp.addEventListeners();
    }
    // This is to initialize all the variables
    CalculatorApp.initialize = function () {
        CalculatorApp.firstNumber = document.querySelector('#firstNumber');
        CalculatorApp.secondNumber = document.querySelector('#secondNumber');
        CalculatorApp.operator = document.querySelector('#operator');
        CalculatorApp.equals_button = document.querySelector('#equals-button');
        CalculatorApp.result_button = document.querySelector('#result-button');
        CalculatorApp.plus_button = document.querySelector('#plus-button');
        CalculatorApp.minus_button = document.querySelector('#minus-button');
        CalculatorApp.div_button = document.querySelector('#divide-button');
        CalculatorApp.mul_button = document.querySelector('#multiply-button');
        CalculatorApp.clear_button = document.querySelector('#clear-button');
        // Now the control goes to constructor again
    };
    // to hookup event listeners for all the HTML elements
    CalculatorApp.addEventListeners = function () {
        CalculatorApp.plus_button.addEventListener('click', CalculatorApp.changeOperatorPlus);
        CalculatorApp.minus_button.addEventListener('click', CalculatorApp.changeOperatorMinus);
        CalculatorApp.div_button.addEventListener('click', CalculatorApp.changeOperatorDivision);
        CalculatorApp.mul_button.addEventListener('click', CalculatorApp.changeOperatorMul);
        CalculatorApp.equals_button.addEventListener('click', CalculatorApp.fetchResults);
        CalculatorApp.clear_button.addEventListener('click', CalculatorApp.clearAll);
    };
    CalculatorApp.fetchResults = function () {
        var opr = CalculatorApp.operator.innerHTML;
        var firstValue = CalculatorApp.firstNumber.value;
        var secondValue = CalculatorApp.secondNumber.value;
        if (firstValue === '' || secondValue === '') {
            CalculatorApp.result_button.innerHTML = 'RESULT';
        }
        else {
            var num1 = parseFloat(CalculatorApp.firstNumber.value);
            var num2 = parseFloat(CalculatorApp.secondNumber.value);
            console.log(num1 + " " + opr + " " + num2);
            var result = 0;
            switch (opr) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                default:
                    result = 0;
                    break;
            }
            CalculatorApp.result_button.innerHTML = result.toString();
        }
    };
    CalculatorApp.changeOperatorPlus = function () {
        CalculatorApp.operator.innerHTML = '+';
    };
    CalculatorApp.changeOperatorMinus = function () {
        CalculatorApp.operator.innerHTML = '-';
    };
    CalculatorApp.changeOperatorDivision = function () {
        CalculatorApp.operator.innerHTML = '/';
    };
    CalculatorApp.changeOperatorMul = function () {
        CalculatorApp.operator.innerHTML = '*';
    };
    CalculatorApp.clearAll = function () {
        CalculatorApp.firstNumber.value = '';
        CalculatorApp.secondNumber.value = '';
        CalculatorApp.operator.innerHTML = '+';
        CalculatorApp.result_button.innerHTML = 'RESULT';
    };
    return CalculatorApp;
}());
// the flow of the application starts here
var app = new CalculatorApp(); // it executes the constructor
