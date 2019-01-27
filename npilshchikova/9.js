/**
 * @param {Number} n number to start logging with
 * @returns {undefined}
 */
module.exports = function (n) {
    while (n >= 0) {
        setTimeout(console.log(n), 1000);
        n--;
    }
};