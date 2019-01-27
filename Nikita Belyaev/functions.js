//01
function splitAndMerge(str, sp) {
    return str.split(' ').map(function(word) {
        return word.split('').join(sp);
    }).join(' ');
};

//02
function convert(obj) {
    return Object.keys(obj).map(function(i) {
		return [i, obj[i]]
    });
};

//03
function toCamelCase(str) {
    return str.replace(/(\_|\-)[A-z]/g, function(sym) {
        return sym[1].toUpperCase();
    });
};

//04
function reverseEachWord(str) {
    return str.split(' ').map(function(word) {
        return word.split('').reverse().join('')
    }).join(' ');
};

//05
function stringExpansion(str) {
    return str.replace(/\d+[A-z]/g, function(entry) {
        var number = parseInt(entry[entry.length - 2])+1;
        var symbol = entry[entry.length - 1];
        return new Array(number).join(symbol);
    });
};

//06
function largest() {
    return Math.max.apply(null, arguments);
};


function smallest() {
    return Math.min.apply(null, arguments);
};

//07
function transform(arr) {
    return arr.map(function(item) {
        return function() {
            return item;
        };
    });
};

//08
function sum() {
    return [].concat.apply([], arguments).reduce(function(acc, el) {
        return acc + el;
    });
};

//09
function countDown(num) {
    if (typeof num !== 'number') {
        throw new Error('Argument must be a number');
    }

    var logNumber = setInterval(function() {
        console.log(num--);
        if (num < 0) {
            clearInterval(logNumber);
        }
    }, 1000);
}

//10
Function.prototype.myBind = function(context) { 
    var f = this;
    var previousArgs = [].slice.call(arguments, 1);
  
    return function() {
      var currentArgs = [].slice.call(arguments);
      var combinedArgs = [].concat(previousArgs, currentArgs);
      return f.apply(context, combinedArgs);
    };
  };





// Tests

//01
console.assert(splitAndMerge("My name is John"," ") === "M y n a m e i s J o h n");
console.assert(splitAndMerge("Hello World!",",") === "H,e,l,l,o W,o,r,l,d,!");

//02
console.assert(JSON.stringify(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'})) === JSON.stringify([["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]));

//03
console.assert(toCamelCase("the-stealth-warrior") === "theStealthWarrior");
console.assert(toCamelCase("The_Stealth_Warrior") === "TheStealthWarrior");

//04
console.assert(reverseEachWord(" A fun little challenge! ") === " A nuf elttil !egnellahc ");

//05
console.assert(stringExpansion('3D2a5d2f') === 'DDDaadddddff');
console.assert(stringExpansion('3d332f2a') === 'dddffaa');
console.assert(stringExpansion('abcde') === 'abcde');

//06
console.assert(largest(2, 0.1, -5, 100, 3) === 100);
console.assert(smallest(2, 0.1, -5, 100, 3) === -5);

//07
console.assert(transform([10, 20, 30, 40, 50])[3]() === 40);
console.assert(transform([10, 20, 30, 40, 50])[4]() === 50);

//08
console.assert(sum(1,3,5,7) === 16);

//09


//10
function addPropToNumber(number) { 
    return this.prop + number; 
};

var bound = addPropToNumber.myBind({ prop: 9 });
console.assert(bound(1) === 10);