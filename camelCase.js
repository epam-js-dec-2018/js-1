function camelCase(str) {
    let separated_words;
    if (str.indexOf("-") > -1) {
        separated_words = str.split("-");
    } else if (str.indexOf("_") > -1) {
        separated_words = str.split("_");
    } else {
        console.info("Provided string doesn't contain - or _");
        return;
    }

    let result = separated_words.map(function(word, i) {
        if (i > 0) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
            return word;
        }
    }).join("");

    return result;
}

//tests
function test() {
    console.info("3. Test of function camelCase");
    if (camelCase("The_Stealth_Warrior") === "TheStealthWarrior") {
        console.info("success");
    } else {
        console.info("error")
    }
}

test();

