//------------- ** 1 ** -------------//

function splitAndMerge(str, sp) {
    return str.split(' ').map(function(word) {
        return word.split('').join(sp);
    }).join(' ');
}

console.log(splitAndMerge("My name is John"," "));
console.log(splitAndMerge("Hello World!",","));

//------------- ** 2 ** -------------//

function convert(hash) {
    var arr = [];
    for (var key in hash) {
        arr.push([key, hash[key]]);
    }
    return arr;
}

console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));

//------------- ** 3 ** -------------//

function toCamelCase(str) {
    return str.replace(/([-_])(\w)/g, function(match, p1, p2) {
        return p2.toUpperCase();
    });
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));

//------------- ** 4 ** -------------//

function reverseSentence(str) {
    return str.split(' ').map(function(word) {
        return word.split('').reverse().join('');
    }).join(' ');
}

console.log(reverseSentence(" A fun little challenge! "));

//------------- ** 5 ** -------------//

function stringExpansion(str) {
    return str.replace(/(\d)([^\d]*)/g, function(match, p1, p2) {
        return p2.repeat(p1);
    })
}

console.log(stringExpansion('3D2a5d2f'));
console.log(stringExpansion('3d332f2a'));
console.log(stringExpansion('abcde'));

//------------- ** 6 ** -------------//

function largest() {
    var args = [].slice.call(arguments);
    return Math.max.apply(null, args);
}

function smallest() {
    var args = [].slice.call(arguments);
    return Math.min.apply(null, args);
}

console.log(largest(2, 0.1, -5, 100, 3));
console.log(smallest(2, 0.1, -5, 100, 3));

//------------- ** 7 ** -------------//

function transform(arr) {
    return arr.map(function(item) {
        return function() {
            return item;
        };
    });
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray[3]());
console.log(newArray[4]());

//------------- ** 8 ** -------------//

function sum(num) {
    if(arguments.length === 1) {
        return num;
    } else {
        return num + sum.apply(null,[].slice.call(arguments,1));
    }
}

console.log(sum(1,3,5,7));

//------------- ** 9 ** -------------//

function countDown(num) {
    var timer = setInterval(function() {
        console.log(num);
        num--;
        if (num < 0) clearInterval(timer);
    }, 1000);
}

console.log(countDown(3));

//------------- ** 10 ** -------------//

Function.prototype.myBind = function () {
    var func = this,
        args = [].slice.call(arguments),
        context = args.shift();
    return function () {
        return func.apply(context, args.concat([].slice.call(arguments)));
    };
};

function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });
bound(1);
