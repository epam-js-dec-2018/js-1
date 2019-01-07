
function splitAndMerge(str, sp) {
    return str.split(' ').map(function(word) {
        return word.split('').join(sp);
    }).join(' ');
};

function convert(object) {
    return Object.keys(object).map(function(i) {
		return [i, object[i]]
    });
};

function toCamelCase(str) {
    newString =  str.replace(/(\_|\-)[A-z]/g, function(string) {
        return string[1].toUpperCase();
    });
    return  newString;
};

function reverseWords(str){
    var splitArray = str.split(' ');
    var newSring =  splitArray[0].split('').reverse().join('')+ " ";
    for(var item = 1 in splitArray){
        newSring = newSring + splitArray[item].split('').reverse().join('')+ " ";
    }
    return newSring;
};

function stringExpansion(str){
     return newSring = str.replace(/(\d)+[A-z]/g,function(word){
        var num = parseInt(word[word.length-2]);
        var character = word[word.length-1];
        return new Array(num+1).join(character);
    }) 
}

function largest(){
    var largest = arguments[0];
    for(var item =1 in arguments){
        if (arguments[item]>largest)
            largest = arguments[item];
    }
    return largest;
};

function smallest(){
    var smallest = arguments[0];
    for(var item =1 in arguments){
        if (arguments[item]<smallest)
            smallest = arguments[item];
    }
    return smallest;
};

function transform(arr) {
  
    return arr.map(function(item) {
        return function() {
            return item;
        };
    });
};

function sum(){
    var sum=0;
    for(var i=0 in arguments){
        sum =sum+ arguments[i];
    }
    return sum;
};

function countDown(num){
    
    while(num>=0){
       console.log(num);
        num--;
    }
    
};
Function.prototype.myBind = function(context) { 
    var f = this;
    var prev = [].slice.call(arguments, 1);
  
    return function() {
      var cur = [].slice.call(arguments);
      var all = [].concat(prev, cur);
      return f.apply(context, all);
    };
  };


console.log("IN: "+ " toCamelCase('the-stealth-warrior') "+ "OUT: " + toCamelCase("the-stealth-warrior") );
console.log("IN: "+ " toCamelCase('The_Stealth_Warrior') "+ "OUT: " + toCamelCase("The_Stealth_Warrior") );

console.log("IN: "+ " reverseWords(' A fun little challenge! ')"+ "OUT: " + reverseWords(" A fun little challenge! ") );

console.log("IN: "+ " stringExpansion('3D2a5d2f')"+ "OUT: " + stringExpansion('3D2a5d2f') );
console.log("IN: "+ " stringExpansion('3d332f2a')"+ "OUT: " + stringExpansion('3d332f2a') );
console.log("IN: "+ " stringExpansion('abcde')"+ "OUT: " + stringExpansion('abcde') );

console.log("IN: "+ " largest(2, 0.1, -5, 100, 3) "+ "OUT: " + largest(2, 0.1, -5, 100, 3));
console.log("IN: "+ " smallest(2, 0.1, -5, 100, 3) "+ "OUT: " + smallest(2, 0.1, -5, 100, 3));

console.log("IN: "+ " transform([10, 20, 30, 40, 50])[3]() "+ "OUT: " +  transform([10, 20, 30, 40, 50])[3]() );

console.log("IN: "+ " sum(1,3,5,7) "+ "OUT: " +  sum(1,3,5,7) );

function addPropToNumber(number) { 
    return this.prop + number; 
};

var bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound(1));


