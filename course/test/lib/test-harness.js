module.exports = function(tests) {
	this.tests = tests;

	this.run = function() {
		var self = this;
		this.tests.forEach(function(test,index,array) {
			// if ( array.length - 1 == index ) {
			// 	test.run(function(){
			// 		console.log('phooey');
			// 		self.renderResult();
			// 	});
			// }
			// else {
				if ( index == 0 ) {
					test.run();
				}

			// }

		});

	};

	this.passed = function() {
		return (tests.map(function(item){ return item.passed(); }).length == tests.length);
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
				if (test.errors()) {
					test.errors().forEach(function(error) {
						console.log(error);
					});
				}
				else if (! test.passed() ) {
					self.renderDiff(test);
				}
			});
		}
	};

	this.renderDiff = function(test) {
		console.log('');
		console.log(test.name() + ' diff:');
		console.log(test.diff());
	};
};