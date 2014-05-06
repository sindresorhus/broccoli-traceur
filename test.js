'use strict';
var assert = require('assert');
var fs = require('fs');
var rimraf = require('rimraf');

afterEach(function () {
	rimraf.sync('temp');
});

it('should transpile ES6 to ES5', function () {
	assert(/Foo/.test(fs.readFileSync('temp/fixture.js', 'utf8')));
});
