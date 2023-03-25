const fibonacci = function(num) {
    if (num < 0) {return 'OOPS'}
    let max = +num;
    fiboSequence = generateFibonacci(max);
    // return fiboSequence
    return fiboSequence[max-1];
};

function generateFibonacci(max) {
    let fiboSequence = [1, 1]
    for (let i = 2; i< max; i++) {
        fiboSequence.push(fiboSequence[i-2] + fiboSequence[i-1]);
    }
    return fiboSequence;
}

// Do not edit below this line
module.exports = fibonacci;
