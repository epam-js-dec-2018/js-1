function splitAndMerge(str, sp) {
    let arr_words = [];
    str.split(" ").map(function(word) {
        arr_words.push(word.split(""));
    });

    let words_join = arr_words.map(function(arr) {
        return arr.join(sp)
    });

    return words_join.join(" ");
}


//tests
function test() {
    console.info("1. Test of function splitAndMerge");
    if (splitAndMerge("Hello World!",",") === "H,e,l,l,o W,o,r,l,d,!") {
        console.info("success");
    } else {
        console.info(splitAndMerge("Hello World!",","));
        console.info("error")
    }
}

test();

