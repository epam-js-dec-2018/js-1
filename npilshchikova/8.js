/**
 * @param {Number}
 * @returns {Number}
 */
module.exports = function sum() {
    if (arguments.length == 0) {
        return 0;
    } else {
        var args = Array.prototype.slice.call(arguments);
        return args[0] + sum.apply(null, args.slice(1));
    }
};
