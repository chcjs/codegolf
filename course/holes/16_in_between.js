var input = require('../lib/console').getConsole(process);

input.on('get',function(data) {
	var numbers = data.split(','),
		floor = parseFloat(numbers[0]),
		ceiling = parseFloat(numbers[1]),
		actual = parseFloat(numbers[2]);

	if ( actual < Math.max(floor,ceiling) && actual > Math.min(floor, ceiling) ) {
		console.log("true");
	}
	else {
		console.log("false");
	}
});