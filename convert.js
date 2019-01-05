function convert(obj) {
    let result = [];
    for (k in obj) {
        result.push([k, obj[k]]);
    }
    return result;
}

//tests
function test() {
    console.info("2. Test of function convert");
    if (JSON.stringify(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'})) === JSON.stringify([ [ 'name', 'Jeremy' ],
        [ 'age', 24 ],
        [ 'role', 'Software Engineer' ] ])) {
        console.info("success");
    } else {
        console.info("error")
    }
}

test();

