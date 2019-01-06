function reverse(str) {
    var words = str.split(/\s/);
    for (var i = 0; i < words.length; i++) {
        var chars= words[i].split("");
        words[i] = "";
        for (var j = chars.length - 1; j >= 0; j--) {
            words[i] += chars[j];
        }
    }
    return words.join(" ");
}
console.log(reverse("Hello world, I'm going to sleep"));