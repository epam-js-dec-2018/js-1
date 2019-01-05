function stringExpansion(str) {
    let result = "";
    str.split("").map(function(char, i) {
        if (i > 0) {
            if (isNaN(char) && !isNaN(str[i-1])) {
                for (let j = 0; j < Number(str[i-1]); j++) {
                    result+=char;
                }
            } else if (isNaN(char) && isNaN(str[i-1])) {
                    result+=char;
            }
        } else if (isNaN(char) && isNaN(str[i+1])) {
            result+=char;
        }
    });
    return result
}

//tests
function test() {
    console.info("5. Test of function stringExpansion");
    if (stringExpansion("abcde") === 'abcde' && stringExpansion("3D2a5d2f") === 'DDDaadddddff' && stringExpansion("3d332f2a") === 'dddffaa') {
        console.info("success");
    } else {
        console.info("error")
    }
}

test();