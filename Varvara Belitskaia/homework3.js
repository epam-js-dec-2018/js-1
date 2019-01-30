// #1
function splitAndMerge(str, sp) {
  return str
    .split(' ')
    .map(function(word) {
      return word.split('').join(sp);
    })
    .join(' ');
}

console.log(splitAndMerge('Hello World!', ','));

// #2
function convert(hash) {
  return Object.keys(hash).map(function(key) {
    return [key, hash[key]];
  });
}

var hash = { name: 'Jeremy', age: 24, role: 'Software Engineer' };
console.log(convert(hash));
console.log(convert({ name: 'Jeremy', age: 24, role: 'Software Engineer' }));

// #3
function toCamelCase(str) {
  return str
    .split(/[-_]/)
    .map(function(word, index) {
      return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
}

console.log(toCamelCase('the-stealth-warrior'));

// #4
function reverseWords(str) {
  return str
    .split(' ')
    .map(function(word) {
      return word
        .split('')
        .reverse()
        .join('');
    })
    .join(' ');
}

console.log(reverseWords(' A fun little challenge! '));

// #5
function stringExpansion(str) {
  return str
    .replace(/[0-9][a-zA-Z]*/g, function(match) {
      return match.slice(1).repeat(match[0]);
    })
    .replace(/\d/g, '');
}

console.log(stringExpansion('3d332f2a'));

// #6
function largest() {
  return [].slice.call(arguments).sort(function(a, b) {
    return a - b;
  })[arguments.length - 1];
}

function smallest() {
  return [].slice.call(arguments).sort(function(a, b) {
    return a - b;
  })[0];
}

console.log(largest(2, 0.1, -5, 100, 3));
console.log(smallest(2, 0.1, -5, 100, 3));

// #7
function transform(baseArray) {
  return baseArray.map(function(item) {
    return function() {
      return item;
    };
  });
}

var baseArray = [10, 20, 30, 40, 50];
var newArray = transform(baseArray);
console.log(newArray[4]());

// #8
function sum() {
  var args = [].slice.call(arguments);
  if (args.length === 0) {
    return 0;
  } else {
    return args.pop() + sum.apply(this, args);
  }
}

console.log(sum(1, 3, 5, 7));

// #9
function countDown(c) {
  setTimeout(function() {
    console.log(c);
    if (c > 0) setTimeout(countDown(c - 1), 1000);
  }, 1000);
}

countDown(3);

// #10
Function.prototype.myBind = function(scope) {
  var fn = this;
  return function() {
    return fn.apply(scope, arguments);
  };
};

function addPropToNumber(number) {
  return this.prop + number;
}
var bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound(1));
