const removeFromArray = function(inputArray, ...elemsToRemove) {
    for (let i = inputArray.length - 1; i >= 0; i--) {
        if (elemsToRemove.includes(inputArray[i])) {
            inputArray.splice(i, 1);
        }
    }

    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
