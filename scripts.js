const convertButton = document.getElementById('convertButton');
const clearConButton = document.getElementById('clearConvertButton');
const fromSelect = document.getElementById('convertFrom');
const toSelect = document.getElementById('convertTo');
const userInput = document.getElementById('convertInput'); //the number that we need to convert
const resultOutput = document.getElementById('conResOutput'); //the result after the convertion.

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
            resultOutput.value = Result;
        } else if (fromValue === "frDec" && toValue === "toOctal") {
            const Result = inputNumber.toString(8);
            resultOutput.value = Result;
        } else if (fromValue === "frDec" && toValue === "toHex") {
            const Result = inputNumber.toString(16);
            resultOutput.value = Result;
            // from Binary to ...... 
        } else if (fromValue === "frBinary" && toValue === "toDec") {
            const Result = parseInt(inputNumber, 2);
            resultOutput.value = Result;
        } else if (fromValue === "frBinary" && toValue === "toOctal") {
            const Result = parseInt(inputNumber, 8);
            resultOutput.value = Result;
        } else if (fromValue === "frBinary" && toValue === "toHex") {
            const Result = parseInt(inputNumber, 16);
            resultOutput.value = Result;
            // from octal to ......
        } else if (fromValue === "frOctal" && toValue === "toBinary") {
            const Result = parseInt(inputNumber, 8).toString(2);
            resultOutput.value = Result;
        } else if (fromValue === "frOctal" && toValue === "toDec") {
            const Result = parseInt(inputNumber, 8).toString(10);
            resultOutput.value = Result;
        } else if (fromValue === "frOctal" && toValue === "toHex") {
            const Result = parseInt(inputNumber, 8).toString(16);
            resultOutput.value = Result;
            // from Hexdecimal to .....
        } else if (fromValue === "frHex" && toValue === "toBinary") {
            const Result = parseInt(inputNumber, 16).toString(2);
            resultOutput.value = Result;
        } else if (fromValue === "frHex" && toValue === "toDec") {
            const Result = parseInt(inputNumber, 16).toString(10);
            resultOutput.value = Result;
        } else if (fromValue === "frHex" && toValue === "toOctal") {
            const Result = parseInt(inputNumber, 16).toString(8);
            resultOutput.value = Result;
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
    resultOutput.value = '';
});
