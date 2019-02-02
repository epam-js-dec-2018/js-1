function stringExpansion(str) {
    var finalString = "";
    var chars = str.split("");
    var repeat = 1;
    for (var i = 0; i < chars.length; i++) {
        if (isNaN(chars[i])) {
            for (var j = 0; j < repeat; j++) {
                finalString += chars[i];
            }
        } else {
            repeat = chars[i];
        }
    }
    return console.log(finalString);
}
stringExpansion("3a5B");