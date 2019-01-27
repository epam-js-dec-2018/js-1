/**
 * @param {String} str dash/underscore delimited string
 * @returns {String}
 */
module.exports = function (str) {
    return str.split(/[-_]/).map(function(value, index) {
        return (index > 0) ? (value.charAt(0).toUpperCase() + value.slice(1)) : (value)
    }).join('');
};
