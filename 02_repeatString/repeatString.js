const repeatString = function(string, repeats) {
    if (repeats < 0) {
        return 'ERROR'
    }
    let newString = '';
    for (repeats; repeats > 0; repeats--) {
        newString+=string;
    }
    return newString
};

// Do not edit below this line
module.exports = repeatString;
