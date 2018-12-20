//------------- ** 1 ** -------------//

function splitAndMerge(str, sp) {
    if (typeof str !== 'string') {
        console.log('First argument must be a string!');
    } else {
        var words = str.split(' ');
        var splitWords = words.map(function(word) {
            return word.split('').join(sp);
        });
        return splitWords.join(' ');
    }
}

//------------- ** 2 ** -------------//

function convert(hash) {
    var arr = [];
    for (var key in hash) {
        arr.push([key, hash[key]]);
    }
    return arr;
}

//------------- ** 3 ** -------------//

function toCamelCase(str) {
    return str.replace(/[-_]/g, '');
}

//------------- ** 4 ** -------------//

function reverseSentence(str) {
    return str.split("").reduce(function(rev, char) {
        return char + rev;
    }, '');
}

function reverseSentence(str) {
    return str.split("").reverse().join("");
}

//------------- ** 5 ** -------------//




//------------- ** 6 ** -------------//

function largest() {
    var args = [].slice.call(arguments);
    return Math.max.apply(null, args);
}

function smallest() {
    var args = [].slice.call(arguments);
    return Math.min.apply(null, args);
}

//------------- ** 7 ** -------------//

function transform(arr) {

}

