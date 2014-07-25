'use strict';
var Filter = require('broccoli-filter');
var traceur = require('traceur');
var objectAssign = require('object-assign');

function TraceurFilter(inputTree, options) {
	if (!(this instanceof TraceurFilter)) {
		return new TraceurFilter(inputTree, options);
	}

	this.inputTree = inputTree;
	this.options = options || {};
}

TraceurFilter.prototype = Object.create(Filter.prototype);
TraceurFilter.prototype.constructor = TraceurFilter;

TraceurFilter.prototype.extensions = ['js'];
TraceurFilter.prototype.targetExtension = 'js';

TraceurFilter.prototype.processString = function (str, relativePath) {
	var options = objectAssign({}, this.options, {filename: relativePath});
	var result = traceur.compile(str, options);

	if (result.errors && result.errors.length > 0) {
		throw result.errors[0];
	}

	return result.js;
};

module.exports = TraceurFilter;
