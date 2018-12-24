//1
function splitAndMerge (str, sp) {
    var arrWord = str.split(" ");
    var strChar = arrWord.join ("");
    var arrChar = strChar.split("");
    return arrChar.join(sp)
    }
splitAndMerge ("Is it ok or not?", "-")

//2
function convert (hash) {
   var b=Object.entries(hash);
    return b  
}       
convert ({name: 'Jeremy', age: 24, role: 'Software Engineer'})

//3
function toCamelCase (snake) {
  if (/-/.test(snake)) {
    var reg = snake.replace(/-\w/g, function(m) {
    return m[1].toUpperCase()
    });
  }
  else {
    reg = snake.replace(/_\w/g, function(m) {
    return m[1].toUpperCase()
    });
  }
  return reg
  }
toCamelCase("the_Stealth_Warrior")

//4
function reverse (str) {
	var b = str.split(' ').map(function(a) {
		var w = a.split('').reverse().join('');
         return w  
    }).join(' ')
 return b 
}
reverse (" A fun little challenge! ")

//5
function stringExpansion(str) {
  return str.replace(/(\d)([^\d]*)/g, function(match, p1, p2) {
      return p2.repeat(p1);
  })
}

console.log(stringExpansion('3D2a5d2f'));
console.log(stringExpansion('3d332f2a'));
console.log(stringExpansion('abcde'));

//6
function largest ()  {
    return Math.max.apply(null, arguments);
  }
largest(2, 0.1, -5, 100, 3)

  function smallest ()  {
    return Math.min.apply(null, arguments);
  }
smallest(2, 0.1, -5, 100, 3)

//7
function transform(baseArray) {
  return baseArray.map(function(item) {
    return function() {
      return item;
    };
  });
}

var baseArray = [10, 20, 30, 40, 50];
var newArray = transform(baseArray);
newArray[3]();

//8
function sum () {
  var args = [].slice.call(arguments);
	if (args.length === 0) {
	  return 0
	};
  return args.shift() + sum.apply(sum, args);
}
sum(1,3,5,7);

//9
 function countDown (num) {
  var a=[];
  for (var i=num; 0<=i; i--) {
    a.push(i);
    setTimeout(function(){
     console.log(a.shift());
    }, i * 1000)
  }
}
countDown(3);
  
//10
Function.prototype.myBind = function () { 
  var fn = this,
  args = Array.prototype.slice.call(arguments),
  obj = args.shift();
    return function () {
          return fn.apply(obj,
          args.concat(Array.prototype.slice.call(arguments)));
      };
  };

function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });
bound(1) 