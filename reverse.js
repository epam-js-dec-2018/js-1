function reverse(str) {
    return str.split(" ").map(function(word){
        return word.split("").reverse().join("")
    }).join(" ");
}

//tests
function test() {
    console.info("4. Test of function reverse");
    if (reverse(" A fun little challenge! ") === " A nuf elttil !egnellahc ") {
        console.info("success");
    } else {
        console.info("error")
    }
}

test();