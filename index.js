'use strict';
var Filter = require('broccoli-filter');
var traceur = require('traceur');

function TraceurFilter(inputTree, options) {
	if (!(this instanceof TraceurFilter)) {
		return new TraceurFilter(inputTree, options);
	}

	Filter.call(this, inputTree);

	this.inputTree = inputTree;
	this.options = options || {};
}

TraceurFilter.prototype = Object.create(Filter.prototype);
TraceurFilter.prototype.constructor = TraceurFilter;

TraceurFilter.prototype.extensions = ['js'];
TraceurFilter.prototype.targetExtension = 'js';

TraceurFilter.prototype.processString = function (str, relativePath) {
	try {
		return traceur.compile(str, this.options, relativePath);
	} catch (errs) {
		throw errs.join('\n');
	}
};

module.exports = TraceurFilter;
