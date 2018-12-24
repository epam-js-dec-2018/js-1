module.exports = {
	/**
     * @param {Number}
     * @returns {Number}
     */
    largest: function() {
        return Math.max.apply(null, arguments);
    },

    /**
     * @param {Number}
     * @returns {Number}
     */
    smallest: function() {
        return Math.min.apply(null, arguments);
    }
};
