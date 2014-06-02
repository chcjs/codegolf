var fileSys = require("fs"),
	TestCase = require("./lib/test-case"),
	TestHarness = require("./lib/test-harness"),
	harness,
	holes,
	tests;

holes = fileSys.readdirSync("../holes");

tests = holes.map(function(hole){ return new TestCase(hole); });

harness = new TestHarness(tests);

harness.on('suiteComplete',function(){
	harness.renderResult();
});

harness.run();

