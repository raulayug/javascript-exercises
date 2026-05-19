const fibonacci = function(a) {
    if (a < 0) {
        return "OOPS";
    }
    if (a < 1) {
        return 0;
    }
    if (a < 3) {
        return 1;
    }

    return (fibonacci(a-2) + fibonacci(a-1)); 
};

// Do not edit below this line
module.exports = fibonacci;
