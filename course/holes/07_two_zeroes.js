var input = require('../lib/console').getConsole(process);

input.on('get',function(data) {
	var numbers = data.split(' '),
		zeroes = 0,
		moreThanTwoZeroes = false;

	numbers.forEach(function(number) {
		if ( ! parseInt(number) ) {
			zeroes ++;
		}

		if ( zeroes > 2 ) {
			moreThanTwoZeroes = true;
		}
	});

	console.log(moreThanTwoZeroes);
});