const removeFromArray = function(array, removable) {
    array.splice(array.indexOf(removable), 1);
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
