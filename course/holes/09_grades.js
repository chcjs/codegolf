var input = require('../lib/console').getConsole(process);

input.on('get',function(data) {
	var score = parseFloat(data);

	if ( score >= 90 && score <= 100 ) {
		console.log('A');
	}
	else if ( score >= 80 && score <= 89.99 ) {
		console.log('B');
	}
	else if ( score >= 70 && score <= 79.99 ) {
		console.log('C');
	}
	else if ( score >= 60 && score <= 69.99 ) {
		console.log('D');
	}
	else if ( score >= 50 && score <= 59.99 ) {
		console.log('E');
	}
	else if ( score >= 0 && score <= 49.99 ) {
		console.log('F');
	}
	else {
		console.log('?');
	}
});