const reverseString = function(input) {
    const intermediateList = input.split("");

    let returnedValue = "";
    for (let i = intermediateList.length - 1; i >= 0; i--) {
        returnedValue += intermediateList[i];
    }

    return returnedValue;
};

// Do not edit below this line
module.exports = reverseString;
