// 1
function splitAndMerge(str,sp) {
	return str.split('').join(sp);
}

console.log('--------------------------------------');
console.log('#1 splitAndMerge("My name is John"," ")');
console.log(splitAndMerge("My name is John"," "));
console.log('splitAndMerge("Hello World!",",")');
console.log(splitAndMerge("Hello World!",","));

// 2
function convert(obj) {
    var arr = [];
    for(key in obj) {
        var inarr = [];
        inarr.push(key,obj[key]);
        arr.push(inarr);
    }
	return arr;
}

console.log('--------------------------------------');
console.log("#2 convert({name: 'Jeremy', age: 24, role: 'Software Engineer'})");
console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));


// 3
function toCamelCase(str) {
    return str.split(/[_+,\-+]/).map((element, index) =>{
        return index > 0 ? element.replace(element.charAt(0),element.charAt(0).toUpperCase()) : element;
    }).join('');
}

console.log('--------------------------------------');
console.log('#3 toCamelCase("the-stealth-warrior")');
console.log(toCamelCase("the-stealth-warrior"));
console.log('toCamelCase("The_Stealth_Warrior")');
console.log(toCamelCase("The_Stealth_Warrior"));

// 4
function reverseWordsInSentence(str) {
    return str.split(' ').map((element) => {
        return element.split('').reverse().join('');
    }).join(' ');
}

console.log('--------------------------------------');
console.log('#4 reverseWordsInSentence(A fun little challenge!)');
console.log(reverseWordsInSentence("A fun little challenge! "))

// 5
function stringExpansion(str){
    var regNumbers = /\D+/;
    var chooseNumbers = str.split(regNumbers);
    var regStr = /\d+/;
    var chooseLetters = str.split(regStr);

    // Clear array from empty values
    // Divide our string in array of chars and take the lastone, after that convert it into Integer
    var arrNumbers = chooseNumbers.filter((element) => { return element !== ""}).map((element) => {return element.split('').pop()}).map((element) => {return parseInt(element)});
    
	// Clear array from empty values
    var arrLetters = chooseLetters.filter((element) => { return element !== ""});

	// If there is no numbers in arrNumbers return whole string
    if(arrNumbers.length === 0) {
        return arrLetters[0];
    } else {
        var completeString = ''
        for(var i = 0; i < arrNumbers.length; i++){
            while(arrNumbers[i] != 0){
                completeString += arrLetters[i];
                arrNumbers[i]--;
            }
        }
        return completeString;
    }
}

console.log('--------------------------------------');
console.log('#5 stringExpansion("3D2a5d2f")');
console.log(stringExpansion('3D2a5d2f'));
console.log('stringExpansion("3d332f2a")');
console.log(stringExpansion('3d332f2a'));
console.log('stringExpansion("abcde")');
console.log(stringExpansion('abcde'));

// 6
function largest() {
	var arr = [].slice.call(arguments);
	return Math.max.apply(null,arr);
}

function smallest() {
	var arr = [].slice.call(arguments);
	return Math.min.apply(null,arr);
}

console.log('--------------------------------------');
console.log('#6 largest(2, 0.1, -5, 100, 3)');
console.log(largest(2, 0.1, -5, 100, 3));
console.log('smallest(2, 0.1, -5, 100, 3)');
console.log(smallest(2, 0.1, -5, 100, 3));

// 7
function transform(arr){
	var arrFunc = [];
    var getTheValue = function() {
        return this.value;
    }

    for(var i = 0; i < arr.length; i++) {
        obj = {
            value: arr[i],
        }
        arrFunc.push(getTheValue.bind(obj));
    }

    return arrFunc;
}

const newArray = transform([10, 20, 30, 40, 50]);
console.log('--------------------------------------');
console.log('#7 newArray = transform([10, 20, 30, 40, 50])');
console.log('newArray[3]()');
console.log(newArray[3]());

// 8
function sum() {
	var arr = [].slice.call(arguments);
	return arr.reduce((a,b) => {return a+b;});
}

console.log('--------------------------------------');
console.log('#8 sum(1,3,5,7)')
console.log(sum(1,3,5,7));

// 9
function countDown(param) {
    var counter = param;
    function innerFun() {
        console.log(counter);
        counter--;
        if(counter < 0) {
            clearInterval(interval);
        }
    }
    var interval = setInterval(innerFun,1000);
}


// 10
Function.prototype.myBind = function (obj) {
    var fn = this;
    return function () {
		var args = [].slice.call(arguments);
        return fn.apply(obj,args);
    };
}
function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });

console.log('--------------------------------------');
console.log('#10 Function.prototype.myBind()')
console.log('bound(1)');
console.log(bound(1));

console.log('--------------------------------------');
console.log('#9 countDown(3)');
countDown(3);
