function transform(arr) {
    return arr.map(function(elem) {
        return function() {
            return elem
        }
    })
}

//tests
function test() {
    console.info("7. Test of function transform");
    const baseArray = [10, 20, 30, 40, 50];
    if (transform(baseArray)[3]() === 40 && transform(baseArray)[4]() === 50) {
        console.info("success");
    } else {
        console.info("error")
    }
}

test();