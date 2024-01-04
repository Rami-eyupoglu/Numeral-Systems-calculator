const convertButton = document.getElementById('convertButton');
const clearConButton = document.getElementById('clearConvertButton');
const fromSelect = document.getElementById('convertFrom');
const toSelect = document.getElementById('convertTo');
const userInput = document.getElementById('convertInput'); //the number that we need to convert
const convResultOutput = document.getElementById('conResOutput'); //the result after the convertion.
const firstNumber = document.getElementById('firstNumber');
const secondNumber = document.getElementById('secondNumber');
const calResultOutput = document.getElementById('calcResult');
const operator = document.getElementById('operator');
const firstNumberType = document.getElementById('firstNumberType');
const secondNumberType = document.getElementById('secondNumberType');
const calculateButton = document.getElementById('equalButton');
const calClearButton = document.getElementById('clearButton');
/* ---------------------YENİ EKLENDİ------------------ */
//control the input in calculator section.
function CalNumberInputControl(input, numeralSystem) {
    if (numeralSystem === 'binary') {
        // Allow only 0 or 1
        input.value = input.value.replace(/[^0-1]/g, '');
    } else if (numeralSystem === 'oct') {
        // Allow only numbers from 0 to 7
        input.value = input.value.replace(/[^0-7]/g, '');
    } else if (numeralSystem === 'hex') {
        // Allow lowercase a-f, uppercase A-F, and numbers from 0-9
        input.value = input.value.replace(/[^0-9a-fA-F]/g, '');
    }
}

function ConvertNumberInputControl(input, numeralSystem) {
    if (numeralSystem === 'frBinary') {
        // Allow only 0 or 1
        input.value = input.value.replace(/[^0-1]/g, '');
    } else if (numeralSystem === 'frOctal') {
        // Allow only numbers from 0 to 7
        input.value = input.value.replace(/[^0-7]/g, '');
    } else if (numeralSystem === 'frHex') {
        // Allow lowercase a-f, uppercase A-F, and numbers from 0-9
        input.value = input.value.replace(/[^0-9a-fA-F]/g, '');
    } else {
        input.value = input.value.replace(/[^0-9]/g, '')
    }
}
/* ---------------------YENİ EKLENDİ------------------ */


function and_Operation(bin1, bin2) {
    const num1 = parseInt(bin1, 2);
    const num2 = parseInt(bin2, 2);

    const result = num1 & num2;

    const binaryResult = result.toString(2);

    return binaryResult;
}
function or_Operation(bin1, bin2) {
    const num1 = parseInt(bin1, 2);
    const num2 = parseInt(bin2, 2);

    const result = num1 | num2;

    const binaryResult = result.toString(2);

    return binaryResult;
}

calculateButton.addEventListener('click', function () {
    //convert the inout to integer.
    const num1 = parseInt(firstNumber.value);
    const num2 = parseInt(secondNumber.value);
    //get the type of numbers.
    const num1_type = firstNumberType.value;
    const num2_type = secondNumberType.value;
    //handle the opetions between tow binary numbers
    if (num1_type === 'binary' && num2_type === 'binary') {
        if (operator.value === '+') {
            const result = parseInt(num1, 2) + parseInt(num2, 2);
            calResultOutput.value = result.toString(2);
        } else if (operator.value === '-') {
            const result = (parseInt(num1, 2) - parseInt(num2, 2));
            calResultOutput.value = result.toString(2);
        } else if (operator.value === '*') {
            const result = parseInt(num1, 2) * parseInt(num2, 2);
            calResultOutput.value = result.toString(2);
        } else if (operator.value === '/') {
            const result = parseInt(num1, 2) / parseInt(num2, 2);
            calResultOutput.value = result.toString(2);
        } else if (operator.value === 'and') {
            const binResult = and_Operation(num1, num2);
            calResultOutput.value = binResult;
        } else if (operator.value === 'or') {
            const binResult = or_Operation(num1, num2);
            calResultOutput.value = binResult;
        }
        //handle the opetions between tow octal numbers
    } else if ((num1_type === 'oct' && num2_type === 'oct')) {
        if (operator.value === '+') {
            const result = parseInt(num1, 8) + parseInt(num2, 8);
            calResultOutput.value = result.toString(8);
        } else if (operator.value === '-') {
            const result = (parseInt(num1, 8) - parseInt(num2, 8));
            calResultOutput.value = result.toString(8);
        } else if (operator.value === '*') {
            const result = parseInt(num1, 8) * parseInt(num2, 8);
            calResultOutput.value = result.toString(8);
        } else if (operator.value === '/') {
            const result = parseInt(num1, 8) / parseInt(num2, 8);
            calResultOutput.value = result.toString(8);
        } else if (operator.value === 'and') {
            alert("You can't do AND operation between octal numbers")
        } else if (operator.value === 'or') {
            alert("You can't do OR operation between octal numbers")
        }
        //handle the opetions between tow hexadecimal numbers
    } else if (num1_type === 'hex' && num2_type === 'hex') {
        if (operator.value === '+') {
            const result = parseInt(num1, 16) + parseInt(num2, 16);
            calResultOutput.value = result.toString(16);
        } else if (operator.value === '-') {
            const result = (parseInt(num1, 16) - parseInt(num2, 16));
            calResultOutput.value = result.toString(16);
        } else if (operator.value === '*') {
            const result = parseInt(num1, 16) * parseInt(num2, 16);
            calResultOutput.value = result.toString(16);
        } else if (operator.value === '/') {
            const result = parseInt(num1, 16) / parseInt(num2, 16);
            calResultOutput.value = result.toString(16);
        } else if (operator.value === 'and') {
            alert("You can't do AND operation between Hexadecimal numbers")
        } else if (operator.value === 'or') {
            alert("You can't do OR operation between Hexadecimal numbers")
        }
    } else if (num1_type !== num2_type) {
        alert("Cannot perform operations between different number types");
    }else {
            alert("Invalid number types");
        }
    });

calClearButton.addEventListener('click', function () {
    firstNumber.value = '';
    secondNumber.value = '';
    calResultOutput.value = '';
});




//the convert button operations ...
convertButton.addEventListener('click', function () {
    //convert string to an integer.
    const inputNumber = parseInt(userInput.value);
    //checking if the input isNot an number.
    if (!isNaN(inputNumber)) {
        const fromValue = fromSelect.value;
        const toValue = toSelect.value;
        // from decimal to ......
        if (fromValue === "frDec" && toValue === "toBinary") {
            const Result = inputNumber.toString(2);
            convResultOutput.value = Result;
        } else if (fromValue === "frDec" && toValue === "toOctal") {
            const Result = inputNumber.toString(8);
            convResultOutput.value = Result;
        } else if (fromValue === "frDec" && toValue === "toHex") {
            const Result = inputNumber.toString(16);
            convResultOutput.value = Result;
            // from Binary to ...... 
        } else if (fromValue === "frBinary" && toValue === "toDec") {
            const Result = parseInt(inputNumber, 2);
            convResultOutput.value = Result;
        } else if (fromValue === "frBinary" && toValue === "toOctal") {
            const Result = parseInt(inputNumber, 2).toString(8);
            convResultOutput.value = Result;
        } else if (fromValue === "frBinary" && toValue === "toHex") {
            const Result = parseInt(inputNumber, 2).toString(16);
            convResultOutput.value = Result;
            // from octal to ......
        } else if (fromValue === "frOctal" && toValue === "toBinary") {
            const Result = parseInt(inputNumber, 8).toString(2);
            convResultOutput.value = Result;
        } else if (fromValue === "frOctal" && toValue === "toDec") {
            const Result = parseInt(inputNumber, 8).toString(10);
            convResultOutput.value = Result;
        } else if (fromValue === "frOctal" && toValue === "toHex") {
            const Result = parseInt(inputNumber, 8).toString(16);
            convResultOutput.value = Result;
            // from Hexdecimal to .....
        } else if (fromValue === "frHex" && toValue === "toBinary") {
            const Result = parseInt(inputNumber, 16).toString(2);
            convResultOutput.value = Result;
        } else if (fromValue === "frHex" && toValue === "toDec") {
            const Result = parseInt(inputNumber, 16).toString(10);
            convResultOutput.value = Result;
        } else if (fromValue === "frHex" && toValue === "toOctal") {
            const Result = parseInt(inputNumber, 16).toString(8);
            convResultOutput.value = Result;
        } else if ((fromValue === "frBinary" && toValue === "toBinary") ||
            (fromValue === "frDec" && toValue === "toDec") ||
            (fromValue === "frOctal" && toValue === "toOctal") ||
            (fromValue === "frHex" && toValue === "toHex")) {
            alert("Both numeral systems are the same. No conversion needed.");
        }
    } else {
        alert('Please enter a valid number.');
    }
});
// Event listener for the clear button
clearConButton.addEventListener('click', function () {
    userInput.value = '';
    convResultOutput.value = '';
});
