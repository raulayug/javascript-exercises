const removeFromArray = function(arr, ...to_remove) {
    console.log(to_remove);

    for (i in to_remove) {
        while (arr.includes(to_remove[i])) {
            let to_remove_index = arr.indexOf(to_remove[i]);
            arr.splice(to_remove_index, 1);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
