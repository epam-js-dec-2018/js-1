// 1
function splitAndMerge(str,sp) {
	return str.split('').join(sp);
}

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

// 3
function toCamelCase(str) {
    return str.split('-').map((element,index) => {
    	return index === 0 ? element : element.replace(element[0],element[0].toUpperCase());
    }).join('_');
}

// 4
function reverseWordsInSentence(str) {
    return str.split(' ').map((element) => {
        return element.split('').reverse().join('');
    }).join(' ');
}

// 5
function stringExpansion(str){
    var regNumbers = /\D+/;
    var chooseNumbers = str.split(regNumbers);
    var regStr = /\d+/;
    var chooseLetters = str.split(regStr);

	// Clear array from empty values
    var arrNumbers = chooseNumbers.filter((element) => { return element !== ""});

	// Divide our string in array of cha	rs and take the lastone, after that convert it into Integer
    arrNumbers = arrNumbers.map((element) => {return element.split('').pop()}).map((element) => {return parseInt(element)});

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

// 6
function largest() {
	var arr = [].slice.call(arguments);
	return Math.max.apply(null,arr);
}

function smallest() {
	var arr = [].slice.call(arguments);
	return Math.min.apply(null,arr);
}

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

// 8
function sum() {
	var arr = [].slice.call(arguments);
	return arr.reduce((a,b) => {return a+b;});
}
