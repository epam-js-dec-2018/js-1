function splitAndMerge(str, sp) {
    var words = str.split(/\s/);
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].split("").join(sp);
    }
    return words.join(" ");
}
console.log(splitAndMerge("Hello world, nice to see you", "*"));