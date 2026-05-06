const repeatString = function(string, repeats) {
    let out = "";

    if (repeats < 0) {
        return "ERROR";
    }

    for (let i = 0; i < repeats; i++) {
        out += string;
    }

    return out;
};

// Do not edit below this line
module.exports = repeatString;
