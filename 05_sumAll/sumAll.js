const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 ||typeof num1 != 'number' || typeof num2 != 'number') {
        return 'ERROR';
    }
    let bigNum, smallNum;
    output = 0;
    if (num1 > num2) {
        bigNum = num1;
        smallNum = num2; 
    } else {
        bigNum = num2;
        smallNum = num1;
    }
    for (i = bigNum; i >= smallNum; i--) {
        output+=i;
    }
    return output;
};

// Do not edit below this line
module.exports = sumAll;
