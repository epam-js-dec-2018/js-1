/**
 * @param {String} str Input string
 * @param {String} sp A char to use as a separator
 * @returns {String}
 */
module.exports = function (str, sp) {
    var worldsArray = [];
    str.split(' ').forEach(function(substr) {
        worldsArray.push(substr.split('').join(sp));
    });
	return worldsArray.join(' ');
};