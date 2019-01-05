function sum() {
    return arguments.length === 0 ? 0 : [].slice.call(arguments)[0] + sum.apply(null, [].slice.call(arguments).slice(1));
}

//tests
function test() {
    console.info("8. Test of function Sum");
    if (sum(1,3,5,7) === 16) {
        console.info("success");
    } else {
        console.info("error")
    }
}

test();