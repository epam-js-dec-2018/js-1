function convert(hash) {
    var arr = [];
    for (var obj in hash) {
        arr.push([obj, hash[obj]]);
    }
    return console.log(arr);
}
convert({name: 'Jeremy', age: 24, role: 'Software Engineer'});
