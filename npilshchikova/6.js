module.exports = {
	/**
     * @param {Number}
     * @returns {Number}
     */
    largest: function() {
        return Math.max.apply(null, Array.prototype.slice.call(arguments));
    },

    /**
     * @param {Number}
     * @returns {Number}
     */
    smallest: function() {
        return Math.min.apply(null, Array.prototype.slice.call(arguments));
    }
};
