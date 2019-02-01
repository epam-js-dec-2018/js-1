function largest() {
    let max_value = arguments[0];
    Array.from(arguments).map(function (arg) {
        if (arg > max_value) {
            max_value = arg;
        }
    });
    return max_value
}

function smallest() {
    let min_value = arguments[0];
    Array.from(arguments).map(function (arg) {
        if (arg < min_value) {
            min_value = arg;
        }
    });
    return min_value
}

//tests
function test() {
    console.info("6. Largest Smallest");
    if (largest(2, 0.1, -5, 100, 3) === 100 && smallest(2, 0.1, -5, 100, 3) === -5) {
        console.info("success");
    } else {
        console.info("error")
    }
}

test();