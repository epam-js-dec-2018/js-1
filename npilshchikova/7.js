/**
 * @param {Array} numbersArray array of numbers
 * @returns {Array}
 */
module.exports = function (numbersArray) {
	return numbersArray.map(function(x) {
        return function() {return x;};
    });
};
