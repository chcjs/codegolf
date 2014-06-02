var events = require('events');

module.exports = function(tests) {
	this.tests = tests;

	events.EventEmitter.call(this);

	this.run = function() {
		var self = this;
		this.tests.forEach(function(test,index,array) {
			if ( index + 1 == array.length ) {
				test.run(function() {
					self.emit('suiteComplete');
				});
			}
			else {
				test.run();
			}
		});
	};

	this.passed = function() {
		return (tests.filter(function(item){ return item.passed(); }).length == tests.length);
	};

	this.renderResult = function() {
		var self = this;

		if (this.passed()) {
			console.log('------');
			console.log('All tests passed. congrats!');
		}
		else {
			console.log('');
			console.log('Errors');

			this.tests.forEach(function(test) {
				if (! test.passed() ) {
					self.renderDiff(test);
				}
				else {
					console.log('All tests passed for ' + test.name());
				}
			});
		}
	};

	this.renderDiff = function(test) {
		console.log('The following tests did not pass for ' + test.name());
		test.renderDiff();
	};
};

module.exports.prototype.__proto__ = events.EventEmitter.prototype;