//#1
function splitAndMerge(str, sp) {
	return str.split(' ').map(function(name) {
		return name.split('').join(sp);
	})
	.join(' ');
}
splitAndMerge("My name is John", " ")

//#2
function convert(hash) {
	var array = [];
	for (var i in hash) {
		array.push([i, hash[i]]);
	}
	return array;
}
var hash = { name: 'Jeremy', age: 24, role: 'Software Engineer' };
convert(hash)

//#3
function toCamelCase(str) {
	var str1 = "";
	for (var i = 0; i < str.length; i++) {
		if (str[i] == "-" || str[i] == "_") {
			i++;
			str1 += str[i].toUpperCase();
		} else {
			str1 += str[i];	
		}
	}
	return str1;
}
toCamelCase("the_stealth_warrior")
toCamelCase("The-stealth-warrior")

//#4
function toReverseString(str) {
	var strSplit = str.split(' ');
	var strReverse = strSplit.map(function(name) {
		return name.split('').reverse().join('');
	});
	return strReverse.join(' ');
}
toReverseString(" A fun little challenge! ")

//#5
function stringExpansion(str) {
	var arr0 = str.match(/[0-9][A-Z]/ig);
	var arr1 = str.split(/[0-9][A-Z]/ig);
	var x = "";
	if (arr0) {
		arr0.forEach(function(element, index) {
			x += arr1[index].split(/[0-9]/g).join("");
			for (var i = 0; i < element[0]; i++) {
				x += element[1];  
			}
		});
		x += arr1[arr1.length - 1];
		return x;
	} else {
		return str;
	}
}
stringExpansion('3D2a5d2f')

//#6
function largest() {
	for (var i = 0; i < arguments.length; i++) {
		if (arguments[i] > arguments[0]) {
			arguments[0] = arguments[i];
		}
	}
	return arguments[0];
}
largest(2, 0.1, -5, 200, 100, 7000, 32, 36, 78, -125222)

function smallest() {
	for (var i = 0; i < arguments.length; i++) {
		if (arguments[i] < arguments[0]) {
			arguments[0] = arguments[i];
		}
	}
	return arguments[0];
}
smallest(2, 0.1, -5, 200, 100, 7000, 32, 36, 78, -125222)

//#7
function transform(array) {
    return array.map(function(name) {
        return function() {
            return name;
        }
    });
}
const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
newArray[3](); 
newArray[4](); 

//#8
function sum() {
	var array = [].slice.call(arguments);
    if (arguments.length === 0) {
        return 0;
    } else {
        return array[0] + sum.apply(null, array.slice(1));
    }
}
sum(1, 3, 5, 7)

//#9
function countDown(number) {
	for (var i = 0; i <= number; i++) {
	    (function(i) {
	        setTimeout(function(){
	          	console.log(number - i);
	        }, 1000*i);
    	    })(i);
	}
} 
countDown(3)

//#10
Function.prototype.myBind = function (name) {
    var func = this;
    return function () {
        return func.apply(name, arguments);
    }
}
function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });
bound(1)
