function toCamelCase(str) {
    var newName = "";
    var chars = str.split("");
    for (var i = 0; i < chars.length; i++) {
        if ((chars[i] !== "-") && (chars[i] !== "_")){
            newName += chars[i];
        }else{
            if (i !== chars.length-1) {
                chars[i+1] = chars[i+1].toUpperCase();
            }
        }
    }
    return newName;
}
console.log(toCamelCase("super-hero_NAME-"));