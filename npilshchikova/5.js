/**
 * @param {String} str a string that includes alphanumeric characters
 * @returns {String}
 */
module.exports = function (str) {
    var lettersArray = [];
    var repeat = 0;
    for (var i = 0; i < str.length; i++) {
        var nextChar = str.charAt(i);
        var nextInt = parseInt(nextChar);
        if (repeat == 0) {
            if (isNaN(nextInt)) {
                lettersArray.push(nextChar);
                repeat = 0;
            } else {
                repeat = nextInt;
            }
        } else {
            if (isNaN(nextInt)) {
                for (var k = 0; k < repeat; k++) {
                    lettersArray.push(nextChar);
                }
                repeat = 0;
            } else {
                repeat = nextInt;
            }
        }
    }
	return lettersArray.join('');
};
