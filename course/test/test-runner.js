var fileSys = require("fs"),
	TestCase = require("./lib/test-case"),
	holes,
	tests;

holes = fileSys.readdirSync("../holes");

tests = holes.map(function(hole){ return new TestCase(hole); });

tests.forEach(function(test,index) {
	if ( index == 0 ) {
		test.run();
		test.on('testComplete',function() {
			test.renderDiff();
		});
	}
});
