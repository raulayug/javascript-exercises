const findTheOldest = function(arr) {
    arr.forEach(element => {
        if (!("yearOfDeath" in element)) {
            element.yearOfDeath = 2026;
        }
    });
    let ans = arr.sort((a, b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth))[0];
    return ans;
};

// Do not edit below this line
module.exports = findTheOldest;
