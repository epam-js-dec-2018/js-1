//Task #1 splitAndMerge

function splitAndMerge(str, sp) {
    var newStr = str.split(" ").join("").split("").join(sp);
    return newStr;
}
console.log(splitAndMerge("My name is John", " "));
console.log(splitAndMerge("Hello World!", ","));

//Task #2 convertHash

function convertHash(hash) {
    var converted = Object.keys(hash).map(function (key) {
        return [key, hash[key]];
    });
    return converted;
}
console.log(convertHash({ name: 'Jeremy', age: 24, role: 'Software Engineer' }));

// Task #3 toCamelCase

function toCamelCase(str) {
    str = str.split(/[_-]/);
    var newStr = "";
    newStr += str[0];
    for (var i = 1; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        newStr += str[i];
    }
    return newStr;
}
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));

//Task #4 reverse

function reverseStr(str) {
    str = str.split(" ");
    var reversedStr = "";
    for (var i = 0; i < str.length; i++) {
        var newStr = str[i];
        for (var j = newStr.length - 1; j >= 0; j--) {
            reversedStr += newStr[j];
        }
        reversedStr += " ";
    }
    return reversedStr;
}
console.log(reverseStr(" A fun little challenge! "));

//Task #5 stringExpansion

function stringExpansion(str) {
    var newStr = "",
        regNum = /[0-9]/,
        regStr = /[A-z]/;
    if (!str.match(regNum)) {
        return str;
    }
    for (var i = 0; i < str.length; i++) {
        if (str[i].match(regNum) && str[i + 1].match(regStr)) {
            for (var j = 0; j < str[i]; j++) {
                newStr += str[i + 1];
            }
        }
    }
    return newStr;
}
console.log(stringExpansion('abcde'));
console.log(stringExpansion('3D2a5d2f'));
console.log(stringExpansion('3d332f2a'));
console.log(stringExpansion(''));

//Task #6 largest & smallest

function largest() {
    var max = -Infinity;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

function smallest() {
    var min = Infinity;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}
console.log(largest(2, 0.1, -5, 100, 3));
console.log(smallest(2, 0.1, -5, 100, 3));

// Task#7 transform

function transform(baseArray) {
    baseArray = baseArray.map(function (el) {
        return function () {
            return el;
        }
    });
    return baseArray
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray[3]());
console.log(newArray[4]());


// //Task #8 sum

function sum() {
    var newArr = [].slice.call(arguments);
    if (newArr.length == 1) {
        return newArr[0];
    }
    return newArr[0] + sum.apply(null, newArr.slice(1));
}
console.log(sum(1, 3, 5, 7));

//Task #9 countDown

function countDown(number) {
    var countingDown = setInterval(() => {
        console.log(number);
        number--;
        if (number == -1) {
            clearInterval(countingDown);
        }
    }, 1000);
}
countDown(3);

//Task #10 myBind

Function.prototype.myBind = function (value) {
    var func = this;
    return function () {
        return func.apply(value, arguments);
    }
};

function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound(1));

