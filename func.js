//Task 1 DONE
function splitAndMerge (str, sp)
{
    var output = "";

    for (i = 0; i < str.length; i++)
    {  
        if (str[i] != " ")
        {
            if (str[i+1] != " ")
            {
        output = output + str[i] + sp;
            }
            else {
                output = output + str[i];
            }
        }
    }

    return output;
}

//Task 2 DONE
function convert(obj) {
    var array = [];
    
    j = 0;
    for( i in obj ) {
    var arr1 = [];
    arr1.push(i);
    arr1.push(obj[i]);
    array[j] = arr1;
    j++;
        }
    return array;
    }

//Task 3 DONE
function toCamelCase(input) {
    var output = "";

    for (i = 0; i<input.length; i++) {
        if (input[i] != "-" && input[i] != "_") {
        if (input[i-1] == "-" || input[i-1] == "_") {
            output = output + input[i].toUpperCase();
        }
        else {
        output = output + input[i];
        }
    }
}

    return output;
}

//Task 4 DONE
function reverse(str) {
    var output = "";
    var words = [];

    words = str.split(" ");

    for (i = 0; i<words.length; i++) {
        output = output + words[i].split("").reverse().join("") + " ";
    }

    return output;
}

//Task 5 DONE
function stringExpansion(str) {
    var output = "";

    for (i = 0; i < str.length; i++) {
            if (!(isNaN(parseInt(str[i], 10))))
            {
                for (j = 0; j < str[i]; j++)
                output = output + str[i+1];
            }
    }

    return output;
}

//Task 6 DONE
function largest(...numbers) {

    function fn(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
      }

    numbers.sort(fn);

    return numbers[numbers.length-1];
}

function smallest(...numbers) {

    function fn(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
      }

    numbers.sort(fn);

    return numbers[0];
}

//Task 7 DONE
function transform(numbers) {
    var arrayOfFunctions = [];
        
        for (i = 0; i < numbers.length; i++) {
            var currentNumber = numbers[i];
            arrayOfFunctions[i] = function() {return currentNumber};
        }
    return arrayOfFunctions;
    }

//Task 8 DONE
function sum() {
    var arr = Array.from(arguments); 
    
        function f(arr) {
            if (arr.length == 1) { return arr[0];}	
            return arr[0] + f(arr.slice(1));    
            }
    
    return f(arr);
    }

//Task 9 DONE
function countDown(n) {
    output = "";
    currentNumber = 0;

    if (n == 0) {return n;}
    else {
        for (i = 0; i <= n; i++)
        {
            currentNumber = n-i;
            output = output + currentNumber + " ";
        }
        return output;
    }
}

//Task 10 NOT YET
