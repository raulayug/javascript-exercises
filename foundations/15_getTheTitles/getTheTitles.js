const getTheTitles = function(books) {
    let arr = [];
    for (const index in books) {
        arr.push(books[index].title);
    }
    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
