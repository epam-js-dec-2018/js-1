function sum() {
    var numbers = Array.from(arguments);
    var total;
    function plus(arr) {
        if (arr.length !== 0) {
            var last = arr[arr.length - 1];
            arr = arr.slice(0, arr.length - 1);
            total = plus(arr) + last;
        } else {
            return 0;
        }
        return total;
    }
    return plus(numbers);
}

sum(1, 3, 5, 9); //should return 18