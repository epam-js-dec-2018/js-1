function testAll() {
    var assert = require('assert');

    // task 1
    var splitAndMerge = require('./1.js');
    
    assert.equal(
        splitAndMerge('My name is John', ' '), 
        'M y n a m e i s J o h n', 
        'splitAndMerge to "M y n a m e i s J o h n" failed'
    );
    assert.equal(
        splitAndMerge('Hello World!', ','), 
        'H,e,l,l,o W,o,r,l,d,!', 
        'splitAndMerge to "H,e,l,l,o W,o,r,l,d,!" failed'
    );

    console.log('Task 1 ok');

    // task 2
    var convert = require('./2.js');
    
    assert.deepEqual(
        convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}), 
        [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]], 
        'convert hash to array failed'
    );
    console.log('Task 2 ok');
    
    // task 3
    var toCamelCase = require('./3.js');
    
    assert.equal(
        toCamelCase('the-stealth-warrior'), 
        'theStealthWarrior', 
        'toCamelCase to "theStealthWarrior" with "-" failed'
    );
    assert.equal(
        toCamelCase('The_Stealth_Warrior'), 
        'TheStealthWarrior', 
        'toCamelCase to "TheStealthWarrior" with underscores failed'
    );

    console.log('Task 3 ok');

    // task 4
    var reverseSentence = require('./4.js');
    
    assert.equal(
        reverseSentence(' A fun little challenge! '), 
        ' A nuf elttil !egnellahc ', 
        'reverse sentense failed'
    );

    console.log('Task 4 ok');

    // task 5
    var stringExpansion = require('./5.js');
    
    assert.equal(
        stringExpansion('3D2a5d2f'), 
        'DDDaadddddff', 
        'stringExpansion 3D2a5d2f failed'
    );

    assert.equal(
        stringExpansion('3d332f2a'), 
        'dddffaa', 
        'stringExpansion 3d332f2a failed'
    );

    assert.equal(
        stringExpansion('abcde'), 
        'abcde', 
        'stringExpansion abcde failed'
    );

    assert.equal(
        stringExpansion(''), 
        '', 
        'stringExpansion for empty string failed'
    );

    console.log('Task 5 ok');

    // task 6
    var numbersSelector = require('./6.js');

    assert.equal(
        numbersSelector.largest(2, 0.1, -5, 100, 3), 
        100, 
        'numbers selector for largest value failed'
    );

    assert.equal(
        numbersSelector.smallest(2, 0.1, -5, 100, 3), 
        -5, 
        'numbers selector for smallest value failed'
    );

    console.log('Task 6 ok');

    // task 7
    var transform = require('./7.js');

    var baseArray = [10, 20, 30, 40, 50];
    var newArray = transform(baseArray);
    assert.equal(newArray[3](), 40);
    assert.equal(newArray[4](), 50);

    console.log('Task 7 ok');

    // task 8
    var sum = require('./8.js');
    
    assert.equal(
        sum(1, 3, 5, 7), 
        16, 
        'sum function failed'
    );

    console.log('Task 8 ok');
}

testAll();

console.info('OK!');