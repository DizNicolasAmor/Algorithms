/* Flatten a nested array. You must account for varying levels of nesting. */

const steamrollArray = arr => {
    let newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (Array.isArray(arr[i])) newArr = newArr.concat(steamrollArray(arr[i]));
        else newArr.push(arr[i]);
    }
    return newArr;
};

console.log(JSON.stringify(steamrollArray([[["a"]], [["b"]]])) === JSON.stringify(["a", "b"]));
console.log(JSON.stringify(steamrollArray([1, [2], [3, [[4]]]])) === JSON.stringify([1, 2, 3, 4]));
console.log(JSON.stringify(steamrollArray([1, [], [3, [[4]]]])) === JSON.stringify([1, 3, 4]));
console.log(JSON.stringify(steamrollArray([1, {}, [3, [[4]]]])) === JSON.stringify([1, {}, 3, 4]));
