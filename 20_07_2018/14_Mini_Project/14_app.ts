class CalculatorApp{
    private static firstNumber:HTMLInputElement;
    private static secondNumber:HTMLInputElement;
    private static operator:HTMLButtonElement;
    private static equals_button:HTMLButtonElement;
    private static result_button:HTMLButtonElement;
    private static plus_button:HTMLButtonElement;
    private static minus_button:HTMLButtonElement;
    private static div_button:HTMLButtonElement;
    private static mul_button:HTMLButtonElement;
    private static clear_button:HTMLButtonElement;

    // This executes as soon as you create an Object
    constructor(){
        CalculatorApp.initialize();
        CalculatorApp.addEventListeners();
    }

    // This is to initialize all the variables
    public static initialize(){
        CalculatorApp.firstNumber = document.querySelector('#firstNumber') as HTMLInputElement;
        CalculatorApp.secondNumber = document.querySelector('#secondNumber') as HTMLInputElement;
        CalculatorApp.operator = document.querySelector('#operator') as HTMLButtonElement;
        CalculatorApp.equals_button = document.querySelector('#equals-button') as HTMLButtonElement;
        CalculatorApp.result_button = document.querySelector('#result-button') as HTMLButtonElement;
        CalculatorApp.plus_button = document.querySelector('#plus-button') as HTMLButtonElement;
        CalculatorApp.minus_button = document.querySelector('#minus-button') as HTMLButtonElement;
        CalculatorApp.div_button = document.querySelector('#divide-button') as HTMLButtonElement;
        CalculatorApp.mul_button = document.querySelector('#multiply-button') as HTMLButtonElement;
        CalculatorApp.clear_button = document.querySelector('#clear-button') as HTMLButtonElement;

        // Now the control goes to constructor again
    }

    // to hookup event listeners for all the HTML elements
    public static addEventListeners(){
        CalculatorApp.plus_button.addEventListener('click',CalculatorApp.changeOperatorPlus);
        CalculatorApp.minus_button.addEventListener('click',CalculatorApp.changeOperatorMinus);
        CalculatorApp.div_button.addEventListener('click',CalculatorApp.changeOperatorDivision);
        CalculatorApp.mul_button.addEventListener('click',CalculatorApp.changeOperatorMul);
        CalculatorApp.equals_button.addEventListener('click',CalculatorApp.fetchResults);
        CalculatorApp.clear_button.addEventListener('click',CalculatorApp.clearAll);
    }

    public static fetchResults(){
        let opr = CalculatorApp.operator.innerHTML;

        let firstValue = CalculatorApp.firstNumber.value;
        let secondValue = CalculatorApp.secondNumber.value;

        if(firstValue === '' || secondValue === ''){
            CalculatorApp.result_button.innerHTML = 'RESULT';
        }
        else{
            let num1 = parseFloat(CalculatorApp.firstNumber.value);
            let num2 = parseFloat(CalculatorApp.secondNumber.value);

            console.log(num1 + " " + opr + " " + num2);
            let result = 0;
            switch(opr){
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
    }

    public static changeOperatorPlus(){
        CalculatorApp.operator.innerHTML = '+';
    }

    public static changeOperatorMinus(){
        CalculatorApp.operator.innerHTML = '-';
    }

    public static changeOperatorDivision(){
        CalculatorApp.operator.innerHTML = '/';
    }

    public static changeOperatorMul(){
        CalculatorApp.operator.innerHTML = '*';
    }

    public static clearAll(){
        CalculatorApp.firstNumber.value = '';
        CalculatorApp.secondNumber.value = '';
        CalculatorApp.operator.innerHTML = '+';
        CalculatorApp.result_button.innerHTML = 'RESULT';
    }
}

// the flow of the application starts here
let app = new CalculatorApp(); // it executes the constructor