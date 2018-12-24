/**
 * @param {String} sentence space-delimited string
 * @returns {String}
 */
module.exports = function (sentence) {
    return sentence.split(' ').map(function(value) {
        return value.split('').reverse().join('');
    }).join(' ');
};