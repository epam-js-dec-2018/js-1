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
console.log(convert(obj));


/* #3. toCamelCase function */

function toCamelCase(str) {
  return str.replace(/_.|-./g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.substr(1).toUpperCase();
  });
}

console.log(toCamelCase('The_Stealth_Warrior'));

/* #4 Reverse of sentence function */
function reverseSentence (str) {
  var strSplit = str.split(' ');

  for (var i = 0; i < strSplit.length; i++) {
    strSplit[i] = strSplit[i].split("").reverse().join("");
  }

  return strSplit.join(" ");
}

console.log(reverseSentence(" A fun little challenge! "))

/* #5 stringExpansion function */
function stringExpansion (str) {

}

/* #6 largest and smallest number functions */
function largestNum () {
  
}


