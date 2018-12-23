// Первая задача

function splitAndMerge(str, sp) {
    var newStr = str.split(" ").join("").split("").join(sp);
    return newStr;
}
console.log(splitAndMerge("My name is John", " "));
console.log(splitAndMerge("Hello World!",","));

// Вторая задача

function convert(obj) {
    var result = [];
    for(var key in obj) {
        result.push([key, obj[key]]);
    }
    return result;
}

var person = {
    name: 'Jeremy', 
    age: 24, 
    role: 'Software Engineer'
}

console.log(convert(person));

// Третья задача

function toCamelCase(str) {
    var reg = /[-_]+/g,
        newStr = str.split(reg);
    for(var i = 1; i < newStr.length; i++) {
        newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1);
    }
    return newStr.join('');
}

console.log(toCamelCase("the-stealth-warrior")); // returns "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")); // returns "TheStealthWarrior"

// Четвёртая задача

function reverseSentence(sentence) {
    var str = sentence.split(" ");
    for(var i = 0; i < str.length; i++) {
        str[i] = str[i].split("").reverse().join("");
    }
    return str.join(" ");
}

console.log(reverseSentence(" A fun little challenge! "));

// Пятая задача

function stringExpansion(chars) {
    var search = /\d\w/g,
        num = /\d/g;
    return chars.replace(search, function(change) {
       return change.slice().repeat(+change[0]).replace(num, "");
    });
}

console.log(stringExpansion('3D2a5d2f'));
console.log(stringExpansion('3d332f2a'));
console.log(stringExpansion('abcde'));

// Шестая задача

function largest() {
    var num = 0;
    for(var i = 0; i < arguments.length; i++) {
        if(arguments[i] > num) {
            num = arguments[i];
        }
    }
    return num;
}

function smallest() {
    var num = 0;
    for(var i = 0; i < arguments.length; i++) {
        if(arguments[i] < num) {
            num = arguments[i];
        }
    }
    return num;
}
console.log(largest(2, 0.1, -5, 100, 3)); // 100
console.log(smallest(2, 0.1, -5, 100, 3)); // -5

// Седьмая задача

function transform(arr) {
    return arr.map(function(num) {
        return function() {
            return num;
        }
    });
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray[3]()); // should return 40
console.log(newArray[4]()); // should return 50

// Восьмая задача - разбираюсь как сделать

// Девятая задача 

function countDown(count) {
    var timer = setTimeout(function go() {
        console.log(count);
        if(count > 0) {
            setTimeout(go, 1000);
        }
        count--;
    }, 1000);
}

countDown(3);

// Десятая задача

Function.prototype.myBind = function (lexicalEnivroment) { 
    var self = this;
    return function() {
        return self.apply(lexicalEnivroment, arguments);
    }
}

function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound(1)); // 10