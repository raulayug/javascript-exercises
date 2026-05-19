const palindromes = function (str) {
    const valid = "abcdefghijklmnopqrstuvwxyz0123456789"

    let arr = str.split('');

    let mapped = arr.map(item => item.toLowerCase());
    let filtered = mapped.filter(item => valid.includes(item));

    let arr_str = filtered.join('');
    let rev_str = filtered.slice().reverse().join('');

    return arr_str === rev_str;
};

// Do not edit below this line
module.exports = palindromes;
