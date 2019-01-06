function arraySort(numbers) {
    function compareFn(a,b) {
        return a - b;
    }
    numbers.sort(compareFn);
    return numbers;
}
function largest() {
    var numbers = Array.from(arguments);
    arraySort(numbers);
    return numbers[numbers.length-1];
}

function smallest() {
    var numbers = Array.from(arguments);
    arraySort(numbers);
    return numbers[0];
}
console.log(largest(-3.5, 7.25, 2, 381, 54));
console.log(smallest(-3.5, 7.25, 2, 381, 54));
