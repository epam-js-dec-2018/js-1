function splitAndMerge (str, sp) {
    var arr = str.split(' ').map(function(item) {
        return item.split('');
    });

    arr = arr.map(function(item) {
        return item.map(function(char,idx) {
            return idx !== item.length-1 ? char+sp : char;
        }).join('');
    });

    var result = "";
    for (var i=0;i<arr.length;i++) {
        result+=arr[i];
        if (i !== arr.length-1) {
            result+=" ";
        }
    }
    return result;
}

// main entry point
console.log(splitAndMerge("Hello World!",","));