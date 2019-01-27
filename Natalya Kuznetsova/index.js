//Задачи можно посмотреть в Codepen - https://codepen.io/nvkuznetsova/pen/aPmzWR

//task1
function splitAndMerge(str, sp) {
  return str.split(' ').join('').split('').join(sp);
}
console.log(splitAndMerge('Hello World', '!'));

//task2
function convert(obj) {
  var arr = [];
  for (var key in obj) {
    var subArr = [];
    subArr.push(key);
    subArr.push(obj[key]);
    arr.push(subArr);
  }
  return arr;
}
console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));

//task3
function toCamelCase(str) {
  var reg = /[-_]/;
  var arr = str.split(reg);
  for (var i = 1; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join('');
}
console.log(toCamelCase('the_stealth_warrior'));
console.log(toCamelCase('The_stealth_Warrior'));

//task4
function challenge(str) {
  return str.split(' ').map(function(item) {
    return item.split('').reverse().join('');
  }).join(' ');
}
console.log(challenge('A fun little challenge!'));

//task5
function isNumber(n) {
   return !isNaN(parseFloat(n)) && isFinite(n);
}
function stringExpansion(str) {
var newStr = '';
for (var i = 0; i < str.length; i++) {
  if (isNumber(str[i])) {
      for (var j = 0; j < +str[i] - 1; j++) {
         newStr += str[i+1];
      }
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}
console.log(stringExpansion('a2Bc4de'));

//task6
function largest() {
  return Math.max.apply(null, arguments);
}
function smallest() {
  return Math.min.apply(null, arguments);
}
console.log(largest(2, 0.1, -5, 100, 3));
console.log(smallest(2, 0.1, -5, 100, 3));

//task7
function transform(arr) {
  return arr.map(function(item) {
    return function() {
      return item;
    }
  });
}
var newArr = transform([10, 20, 30, 40, 50]);
console.log(newArr[3]());
console.log(newArr[4]());

//task8
function sum() {
  var arr = [];
  if (arguments.length === 1) {
    arr = arguments[0];
  } else {
    for (var i = 0; i < arguments.length; i++) {
      arr.push(arguments[i]);
    }
  }
  return (arr.length === 1) ? arr.pop() : arr.pop() + sum(arr);
}
console.log(sum(1,3,5,7));

//task9
function countDown(n) {
  var timer = setInterval(function() {
    if (n >= 0) {
      console.log(n);
      n = n - 1;
    } else {
      clearInterval(timer);
    }
  }, 1000);
}
countDown(3);

//task10
Function.prototype.myBind = function(context) {
  var func = this;
  return function() {
    return func.apply(context, arguments);
  }
}

function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound(1));
