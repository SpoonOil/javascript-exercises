const palindromes = function (string) {
    string = string.toLowerCase();
    string = string.replace(/[^a-z]/g,"")
    reversedString = string.split('').reverse().join('');
    return string == reversedString;
};

// Do not edit below this line
module.exports = palindromes;
