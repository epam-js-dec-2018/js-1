//#1
function splitAndMerge(str, sp) {
	var strSplit = str.split(' '); 
	var strMap = strSplit.map(function(name) {
		return name.split('').join(sp);
	});
	return strMap.join(' ');
}
alert(splitAndMerge("My name is John", " "))

//#2
function convert(hash) {
	var array = [];
	for (var i in hash) {
		array.push([i, hash[i]]);
	}
	return array;
}

//№3
function toCamelCase(str) {
	if (str.search(/-/i) != -1) {
		var str1  = str.split('-');
		var str2 = [];
		for (var i = 0; i < str1.length; i++) {
		    str2[i] = str1[i][0].toUpperCase() + str1[i].slice(1);
		}
		return str2.join('');
	} else if (str.search(/_/i) != -1) {
		var str1  = str.split('_');
		var str2 = [];
		for (var i = 0; i < str1.length; i++) {
		    str2[i] = str1[i][0].toUpperCase() + str1[i].slice(1);
		}
		return str2.join('');
	}
}
alert(toCamelCase("the-stealth-warrior"))

//#4
function toReverseString(str) {
	var strSplit = str.split(' ');
	var strReverse = strSplit.map(function(name) {
		return name.split('').reverse().join('');
	});
	return strReverse.join(' ');
}
alert(toReverseString(" A fun little challenge! "))

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
	} else
		return str;
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

//#8 - in progress
//without recursion
function sum() {
	var s = 0;
	for (var i = 0; i < arguments.length; i++) {
		s += arguments[i];
	}
	return s;
}
//with recursion
function sum() {
	
}

//#9
function countDown(number) {
	for (var i = 3; i <= number; i++) {
	    (function(i) {
	        setTimeout(function(){
	          	console.log(number - i);
	        }, 1000*i);
    	    })(i);
	}
} 
countDown(3)

//#10 - in progress
