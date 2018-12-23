// 1) Write a function splitAndMerge
function splitAndMerge(str,sp) {
    return str.split(' ').join('').split('').join(sp);
}

console.log(splitAndMerge("My name is John"," "));
console.log(splitAndMerge("Hello World!",","));


// 2) Write a function convert a hash into an array
function convert(value) {
    var result_arr = [];
    for (var key in value) {
        result_arr.push([key, value[key]])
    }
    return result_arr;
}

console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));


// 3) Complete the method/function so that it converts dash/underscore delimited words into camel casing.
    function toCamelCase(str){
    var array_words = [];
    array_words = str.replace( /[-_]/g, " " ).split(' ');
    for(var i=1; i<array_words.length; i++) {
        array_words[i]=array_words[i].charAt(0).toUpperCase()+ array_words[i].slice(1);
    }
    return array_words.join('');
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));


// 4) Write a function that takes a sentence (string) and reverses each word in the sentence.
function reverse(str) {
    var str = str.split('').reverse().join('');
    return str.split(' ').reverse().join(' ');
}

console.log(reverse(" A fun little challenge! "));


// 5) Write a function stringExpansion
function stringExpansion(str) {
    return str.replace(/(\d)([^\d]*)/g, function(match) {
            return match.slice(1).repeat(match[0]);
        })
}

console.log(stringExpansion('3D2a5d2f'));
console.log(stringExpansion('3d332f2a'));
console.log(stringExpansion('abcde'));


// 6) Write largest and smallest functions
function largest() {
    var max = 0;
    for (var i=0; i<arguments.length; i++) {
        if (arguments[i]>max)
            max = arguments[i];
    }
    return max;
}
function smallest() {
    var min = 0;
    for (var i=0; i<arguments.length; i++) {
        if (arguments[i]<min)
            min = arguments[i];
    }
    return min;
}

console.log(largest(2, 0.1, -5, 100, 3));
console.log(smallest(2, 0.1, -5, 100, 3));


// 7) Write function transform that will transform array of numbers to array of functions
function transform(array) {
    return array.map(function(value) {
        return function() {
            return value;
        };
    });
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);

console.log(newArray[3]());
console.log(newArray[4]());


// 8) Write function sum. Function expects arbitrary number of digit arguments and returns compound value of them
function sum() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
        args[i] = arguments[i];
    }
    if (args.length > 1)
        return args[0] + sum(...args.slice(1));
    else
        return args[0];
}

console.log(sum(1,3,5,7));


// 9) Write function countDown. Function expects number and logs values one by one till zero with one second delay
function countDown(counter) {
    var timer = setInterval(function() {
        if(counter<0)
            clearInterval(timer);
        else {
            console.log(counter);
            counter--;
        }
    }, 1000);
}

countDown(3);


// 10) Write a polyfill for a .bind() function
Function.prototype.myBind = function (scope) {
    var context = this;
    return function() {
        return context.apply(scope, arguments);
    }
};

function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound(1));