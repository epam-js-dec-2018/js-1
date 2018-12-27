/**
 * #1
 * Function accept 2 parameters:str and sp. str is a sentence. sp is a char as separator.
 * First we need to divide the sentence into words(Use separator space);
 * and then divide each word into characters(Use separator empty string);
 * and then merge each characters with the specified sp;
 * at last merge all the words(Use separator space) and return it.
 *
 * @param str
 * @param sp
 * @returns {string}
 */
function splitAndMerge(str, sp) {
	var arr = str.split(' ').map(function (item) {
		return item.split('');
	});

	arr = arr.map(function (item) {
		return item.map(function (char, idx) {
			return idx !== item.length - 1 ? char + sp : char;
		}).join('');
	});

	var result = "";
	for (var i = 0; i < arr.length; i++) {
		result += arr[i];
		if (i !== arr.length - 1) {
			result += " ";
		}
	}
	return result;
}

/**
 * #2
 * Convert a hash into an array. Nothing more, Nothing less.
 *
 * @param obj
 * @returns {*}
 */
function convert(obj) {
	if (obj instanceof Object) {
		var array = [];
		for (var item in obj) {
			array.push([item, obj[item]]);
		}
		return array;
	}
	else
		return;
}

/**
 * #3
 * Complete the method/function so that it converts dash/underscore delimited words into camel casing.
 * The first word within the output should be capitalized only if the original word was capitalized.
 *
 * @param str
 * @returns {string | *}
 */
function toCamelCase(str) {
	if (str.indexOf('-') !== -1) {
		str = str.split('-');
	}
	else if (str.indexOf('_') !== -1) {
		str = str.split('_');
	}
	str = str.map(function (item, i) {
		if (i === 0) {
			var char = item[0];
			item = item.toLowerCase().split('');
			item[0] = char;
			return item.join('');
		}
		else {
			var char = item[0].toUpperCase();
			item = item.toLowerCase().split('');
			item[0] = char;
			return item.join('');
		}
	}).join('');
	return str;
}

/**
 * #4
 * Write a function that takes a sentence (string) and reverses each word in the sentence.
 *
 * @param str
 * @returns {string | *}
 */
function reverse(str) {
	str = str.split(' ');
	str = str.map(function (item) {
		item = item.split('');
		var res = [];
		for (var i = item.length - 1; i >= 0; i--) {
			res.push(item[i]);
		}
		return res.join('');
	}).join(' ');
	return str;
}

/**
 * #5
 * Given a string that includes alphanumeric characters ('3a4B2d')
 * return the expansion of that string: The numeric values represent the occurance of each letter
 * preceding that numeric value. There should be no numeric characters in the final string.
 * Empty strings should return an empty string.
 *
 * @param str
 * @returns {*}
 */
function stringExpansion(str) {
	if (str.length === 1) {
		return str[0] >= 'a' && str[0] <= 'z' || str[0] >= 'A' && str[0] <= 'Z' ? str : '';
	}
	else if (str.length === 2) {
		if (str[0] >= '0' && str[0] <= '9') {
			if (str[1] >= 'a' && str[1] <= 'z' || str[1] >= 'A' && str[1] <= 'Z') {
				var res = '';
				for (var j = 0; j < str[0]; j++)
					res += str[1];
				return res;
			}
			else
				return '';

		}
		else {
			if (str[1] >= 'a' && str[1] <= 'z' || str[1] >= 'A' && str[1] <= 'Z')
				return str;
			else
				return str[0];
		}
	}
	else if (str.length > 2) {
		var res = '';
		// first iteration
		if (str[0] >= '0' && str[0] <= '9') {
			if (str[1] >= 'a' && str[1] <= 'z' || str[1] >= 'A' && str[1] <= 'Z')
				for (var j = 0; j < str[0]; j++)
					res += str[1];
		}
		else {
			if (str[1] >= 'a' && str[1] <= 'z' || str[1] >= 'A' && str[1] <= 'Z')
				res = str[0] + str[1];
			else
				res = str[0];
		}
		// iterations > 1
		for (var i = 1; i < str.length - 1; i++) {
			if (str[i] >= '0' && str[i] <= '9') {
				if (str[i + 1] >= 'a' && str[i + 1] <= 'z' || str[i + 1] >= 'A' && str[i + 1] <= 'Z')
					for (var j = 0; j < str[i]; j++)
						res += str[i + 1];
			}
			else {
				if (str[i + 1] >= 'a' && str[i + 1] <= 'z' || str[i + 1] >= 'A' && str[i + 1] <= 'Z')
					res += str[i + 1];
			}
		}
		return res;
	}
	else
		return str;

}

/**
 * #6
 * Write largest and smallest functions that returns the largest and smallest number passed like a argument.
 *
 * @returns {number} the largest and smallest number
 */
function largest() {
	if (arguments.length === 0)
		return;
	else {
		var max = arguments[0];
		for (var i = 1; i < arguments.length; i++)
			if (arguments[i] > max)
				max = arguments[i];
		return max;
	}
}

function smallest() {
	if (arguments.length === 0)
		return;
	else {
		var min = arguments[0];
		for (var i = 1; i < arguments.length; i++)
			if (arguments[i] < min)
				min = arguments[i];
		return min;
	}
}

/**
 * #7
 * Write function transform that will transform array of numbers to array of functions
 * that will return value from a base array.
 *
 * @param {Array} arr
 * @returns array of functions
 */
function transform(arr) {
	// check for type Array
	if (!(arr instanceof Array))
		throw new Error("Wrong type of input data");
	else {
		// check for type Array of numbers
		var type = 'number';
		for (var i = 0; i < arr.length; i++)
			if (type !== typeof(arr[i]))
				throw new Error("Wrong type of Array data");
		// transform array of numbers to an array of functions
		arr = arr.map(function (item) {
			return function () {
				return item;
			}
		});
		return arr;
	}
}

/**
 * #8
 * Write function sum. Function expects arbitrary number of digit arguments and returns compound value of them.
 * Note: function should use recursion
 *
 * @param a - arbitrary number of digit arguments
 * @returns compound value of them
 *
 */

function sum(a) {
	// convert [Arguments] to an Array
	// return data: Array, true/false, if types of data are equal
	function argsToArr(args) {
		var arr = [];
		var type = typeof(args[0]);
		var isEqualTypes = true;
		for (var i = 0; i < args.length; i++) {
			arr.push(args[i]);
			if (typeof(args[i]) !== type)
				isEqualTypes = false;
		}
		return [arr, isEqualTypes];
	}

	// check if none of data presented
	if (arguments.length === 0)
		return;
	else if (arguments.length === 1) {
		// if args' length === 1 it can be an Array or just a 1 variable
		//
		if (arguments[0] instanceof Array) {
			if (arguments[0].length === 1)
				return arguments[0][0];
			return arguments[0][0] + sum(arguments[0].slice(1));
		}
		else if (typeof(arguments[0]) === 'number') {
			return arguments[0];
		}
		else
			throw new Error("Wrong arguments' type is presented on the input data")
	}
	else {
		var arr = argsToArr(arguments);
		var isEqualTypes = arr[1];
		arr = arr[0];
		// check for equal types of data, if not -> throw type error
		if (isEqualTypes) {
			if (arr.length === 1)
				return arr[0];
			return arr[0] + sum(arr.slice(1));
		}
		else
			throw new Error("Wrong arguments' type is presented on the input data");
	}
}

/**
 * #9
 * Write function countDown.
 * Function expects number and logs values one by one till zero with one second delay.
 *
 * @param num
 */
function countDown(num) {
	if (typeof(num) === 'number') {
		var str = '';
		var timerId = setInterval(function () {
			str += num-- + ' ';
			if (num === 0) {
				clearInterval(timerId);
				console.log(str += num);
			}
		}, 1000);
	}
	else
		console.log('Argument passed to the function is not a number');
}

/**
 * #10
 * Write a polyfill for a .bind() function and save it in Function.prototype.myBind().
 * myBind() should work in an exact same way as the usual bind()
 * - take context as a first parameter and the list of arguments separated by comma.
 *
 * @param context
 * @returns {function(): *}
 */

Function.prototype.myBind = function (context) {

	var func = this;
	return function () {
		return func.apply(context, arguments);
	};
};


// main entry point
console.log('#1:');
console.log(splitAndMerge("My name is John", " "));  // "M y n a m e i s J o h n"
console.log(splitAndMerge("Hello World!", ","));     // "H,e,l,l,o W,o,r,l,d,!"

console.log('\n#2:');
console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));
// [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]

console.log('\n#3:');
console.log(toCamelCase("the-stealth-warrior"));    // "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior"));    // "TheStealthWarrior"

console.log('\n#4:');
console.log(reverse(" A fun little challenge! "));  // " A nuf elttil !egnellahc "

console.log('\n#5:');
console.log(stringExpansion('3D2a5d2f'));   // 'DDDaadddddff'
console.log(stringExpansion('3d332f2a'));   // 'dddffaa'
console.log(stringExpansion('abcde'));      // 'abcde'


console.log('\n#6:');
console.log(largest(2, 0.1, -5, 100, 3));   // 100
console.log(smallest(2, 0.1, -5, 100, 3));  // -5

console.log('\n#7:');
const baseArray = [10, 20, 30, 40, 50];
try {
	const newArray = transform(baseArray);
	console.log(newArray[3]()); // should return 40
	console.log(newArray[4]()); // should return 50
}
catch (e) {
	console.log(e.message);
}


console.log('\n#8:');
try {
	console.log(sum(1, 3, 5, 7)); //should return 16
}
catch (e) {
	console.log(e.message);
}


console.log('\n#10:');

function addPropToNumber(number) {
	return this.prop + number;
}

var bound = addPropToNumber.myBind({prop: 9});
console.log(bound(1)); // 10

console.log('\n#9:');
countDown(3); //3 2 1 0
