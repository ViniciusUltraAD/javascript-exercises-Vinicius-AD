const repeatString = function(value, reps) {
    if (reps < 0) {
        return "ERROR";
    } 

    let returnedValue = "";

    for (let i = 0; i < reps; i++) {
        returnedValue += value;
    }

    return returnedValue;
};

// Do not edit below this line
module.exports = repeatString;
