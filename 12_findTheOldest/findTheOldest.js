const findTheOldest = function(people) {
    let newPeople = people.sort((a, b) =>  {
        thisYear = (new Date()).getFullYear();
        if (!a.yearOfDeath) {
            return thisYear - a.yearOfBirth - (b.yearOfDeath - b.yearOfBirth)
        } else if (!b.yearOfDeath) {
            return a.yearOfDeath - a.yearOfBirth - (thisYear- b.yearOfBirth)
        }
        return a.yearOfDeath - a.yearOfBirth - (b.yearOfDeath - b.yearOfBirth)
    })
    newPeople.reverse()
    return newPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
