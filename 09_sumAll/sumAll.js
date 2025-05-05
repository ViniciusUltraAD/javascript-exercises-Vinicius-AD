const sumAll = function(firstNumber, secondNumber) {
    if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) {
        return "ERROR";
    }
    
    if (firstNumber < 0 || secondNumber < 0) {
        return "ERROR";
    }

    if (firstNumber > secondNumber) {
        const temp = firstNumber;
        firstNumber = secondNumber;
        secondNumber = temp;
    }

    sum = 0;
    for (let i = firstNumber; i <= secondNumber; i++) {
        sum += i;
    }

    return sum;
};


// Do not edit below this line
module.exports = sumAll;
