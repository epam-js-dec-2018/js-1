/* Task 1 */

function splitAndMerge (str, sp) {
    var result = '';
    var words = str.split(/\s/);
    words.forEach(word => {
        var chars = word.split('');
        var newWord = chars.join(sp);
        result += newWord + ' ';             
    });
    result = result.trim();
    return result;
}

/* Task 2 */

function convert (object) {
    var result = new Array();
    for (var key in object) {
        result.push(new Array(key, object[key]));
    }    
    return result;
}

/* Task 3 */

function toCamelCase (str) {
    var result = '';
    var words = str.split(/-|_/);
    words.forEach(word => {       
        word = words.indexOf(word) == 0 ? word : word[0].toUpperCase() + word.slice(1);
        result += word;             
    });    
    return result;
}

/* Task 4 */

function reverseStr (str) {
    var result = new Array();
    var words = str.split(/\s/);
    words.forEach(word => {
        var chars = word.split('');
        var newWord = chars.reverse().join('');
        result.push(newWord);                         
    });    
    return result.join(' ');
}

/* Task 5 */

function stringExpansion (str) {
    var result = '';
    var words = str.match(/\d?([a-z]|[A-Z]){1}/g);
    words.forEach(word => {
        if(word.length === 2) {
        for (i = 0; i < parseInt(word[0]); i++ )
        result += word[1]; 
        }
        else
        result += word;                       
    });    
    return result;
}

/* Task 6 */

function largest () {
    var max = arguments[0]; 
    if(arguments.length>1)   
    for (i = 1; i < arguments.length; i++ ) {
        if(arguments[i] > max) {
        max = arguments[i]; 
        }                              
    };    
    return max;
}

function smallest () {
    var min = arguments[0]; 
    if(arguments.length>1)     
    for (i = 1; i < arguments.length; i++ ) {
        if(arguments[i] < min) {
        min = arguments[i]; 
        }                              
    };    
    return min;
}

/* Task 7 */

function transform (baseArray) {     
    var funcArr = new Array();  
    baseArray.forEach(item => {
      var newFunc = function() {         
            return item;        
      };
      funcArr.push(newFunc);
    });  
    return funcArr;
  }

/* Task 8 */

function sum () { 
    var numbers = Array.from(arguments);     
    var result = numbers[0]; 
    if(numbers.length > 1) {    
        return result += sum.apply(this, numbers.slice(1));
    }
    else {
        return result;
    }
  }

/* Task 9 */

function countDown (seconds) { 
           
        setTimeout(function() {
            if(seconds>0) {  
            console.log(seconds);
            seconds--;
            countDown(seconds);
            }
            else console.log(0);    
        }, 1000);
        
  }

/* Task 10 */

Function.prototype.myBind = function () {
    var func = this; 
    var input = Array.from(arguments);
    return function () {
    return func.apply(input.shift(), input.concat(Array.from(arguments)));
    };
    };

    function addPropToNumber(number) { return this.prop + number; }
    var bound = addPropToNumber.myBind({ prop: 9 });
    bound(1);

/* Test */

splitAndMerge("My name is John"," ");
splitAndMerge("Hello World!",",");

convert({name: 'Jeremy', age: 24, role: 'Software Engineer'});

toCamelCase("the-stealth-warrior");
toCamelCase("The_Stealth_Warrior");

reverseStr(" A fun little challenge! ");

stringExpansion('3D2a5d2f');
stringExpansion('3d332f2a');
stringExpansion('abcde');

largest(2, 0.1, -5, 100, 3);
smallest(2, 0.1, -5, 100, 3);

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
newArray[3]();
newArray[4]();

sum(1,3,5,7);
    
countDown(3);

function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });
bound(1);



