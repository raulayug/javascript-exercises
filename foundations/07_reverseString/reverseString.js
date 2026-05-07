const reverseString = function(string) {
    let reverse_string = "";

    for (let i = 1; i <= string.length; i++) {
        reverse_string += string[string.length - i];
    }

    return reverse_string;
};

// Do not edit below this line
module.exports = reverseString;
