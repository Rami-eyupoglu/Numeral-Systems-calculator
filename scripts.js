// Function to convert decimal to binary
function convertDecimalToBinary(decimalNumber) {
    return decimalNumber.toString(2);
}

// Get references to the necessary elements
const convertButton = document.querySelector('button[type="convertButton"]');
const clearConButton = document.querySelector('button[type="clearConButton"]');
const fromSelect = document.querySelector('select[name="from"]');
const toSelect = document.querySelector('select[name="to"]');
const userInput = document.querySelector('.box:nth-child(2) .line:nth-child(3) input[type="text"]');
const resultOutput = document.querySelector('conResOutput');

// Event listener for the convert button
convertButton.addEventListener('click', function() {
    const decimalNumber = parseInt(userInput.value);
    
    if (!isNaN(decimalNumber)) {
        const fromValue = fromSelect.value;
        const toValue = toSelect.value;
        
        if (fromValue === "frDec" && toValue === "toBinary") {
            const binaryResult = convertDecimalToBinary(decimalNumber);
            resultOutput.value = binaryResult;
        } else {
            // Handle other conversions if needed for other selections
        }
    } else {
        alert('Please enter a valid decimal number.');
    }
});

// Event listener for the clear button
clearConButton.addEventListener('click', function() {
    userInput.value = '';
    resultOutput.value = '';
});
