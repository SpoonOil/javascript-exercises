const removeFromArray = function(array, ...removables) {
    for (const removable of removables) {
        if (array.includes(removable)) {
            array.splice(array.indexOf(removable), 1);
        }
    }
    return array
};

// Do not edit below this line

module.exports = removeFromArray;
