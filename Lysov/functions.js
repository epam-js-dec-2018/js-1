/* #1. Split and Merge function */
function splitAndMerge (str, sp) {
  
  var splitOnWords = str.split(' ');
 
  splitOnWords = splitOnWords.map(function(words) {
    return words.split('').join(sp);
  });
  return splitOnWords.join(' ');
}

//console.log(splitAndMerge("hello world!", ','));

/* #2. Convert function */
function convert (obj) {
  mass = [];

  for (var key in obj) {
    var massKeys = [];
    massKeys.push(key);
    massKeys.push(obj[key]);
    mass.push(massKeys);
  }

  return mass;
}

var obj = {
  name: 'Jeremy',
  age: 24,
  role: 'Software Engineer'
}

//console.log(convert(obj));


/* #3. toCamelCase function */

function toCamelCase(str) {
  return str.replace(/_.|-./g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.substr(1).toUpperCase();
  });
}

//console.log(toCamelCase('The_Stealth_Warrior'));

/* #4 Reverse of sentence function */
function reverseSentence (str) {
  var strSplit = str.split(' ');

  for (var i = 0; i < strSplit.length; i++) {
    strSplit[i] = strSplit[i].split("").reverse().join("");
  }

  return strSplit.join(" ");
}

//console.log(reverseSentence(" A fun little challenge! "))

/* #5 stringExpansion function */
function stringExpansion (str) {
  return str.replace(/(\d)([^\d]*)/g, function(match, firstPar, secondPar) {
      return secondPar.repeat(firstPar);
  })
}
//console.log(stringExpansion('3d332f2a'));

/* #6 largest and smallest number functions */
function largestNum () {
  var max = 0;
  for (var i = 0; i < arguments.length; i++) {
    arguments[i] > max ? max = arguments[i] : max;
  }
  return max;
}

function smallestNum () {
  var min = 0;
  for (var i = 0; i < arguments.length; i++) {
    arguments[i] > min ? min : min = arguments[i];
  }
  return min;
}

//console.log(smallestNum(1, 0.1, -5, 0, 9, -1)); 

/* #7. Transform array of numbers to array of functions. */
function transform(baseArray) {
  return baseArray.map(function(element) {
    return function() {
      return element;
    };
  });
}

var baseArray = [10, 20, 30, 40, 50];
var newArray = transform(baseArray);

//console.log(newArray[3]());

/* #8. Sum of arguments (with recursion) */
function sumArguments() {
  var args = [].slice.call(arguments);
  /* Base Case */
  if (args.length === 0) {
    return 0
  };
  /* Deeping */
    return args.shift() + sumArguments.apply(sumArguments, args);
}

console.log(sumArguments(1, 2, 3, 5));

/* #9. CountDown function */ 
function CountDown (num) {
  var count = [];
  while (num >= 0) {
    count.push(num--);
  }
  return count;
}

//console.log(CountDown(17))

/* #10. Polyfill for a bind */
