//#1 - completed
function splitAndMerge(str, sp) {
	var strSplit = str.split(' '); 
	var strMap = strSplit.map(function(name) {
		return name.split('').join(sp);
	});
	return strMap.join(' ');
}
alert(splitAndMerge("My name is John", " "))

//#2 - completed
function convert(hash) {
	var array = [];
	for (var i in hash) {
		array.push([i, hash[i]]);
	}
	return array;
}

//#4 - completed
function toReverseString(str) {
	var strSplit = str.split(' ');
	var strReverse = strSplit.map(function(name) {
		return name.split('').reverse().join('');
	});
	return strReverse.join(' ');
}
alert(toReverseString(" A fun little challenge! "))

//#6 - completed
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

//#8
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

//#9 - completed
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
