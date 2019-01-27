/**
 * @param {Object} hash Object with key-value pairs
 * @returns {Array}
 */
module.exports = function (hash) {
    var finalArray = [];
    for (key in hash) {
        finalArray.push([key, hash[key]]);
    }
	return finalArray;
};