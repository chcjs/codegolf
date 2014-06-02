var input = require('../lib/console').getConsole(process);

input.on('get',function(data) {
	var num = parseInt(data);

	if( num % 3 === 0 && num % 5 === 0 ) {
		console.log('FizzBuzz');
	}
	else if ( num % 3 === 0 ) {
		console.log('Fizz');
	}
	else if ( num % 5 === 0 ) {
		console.log('Buzz');
	}
	else {
		console.log(num);
	}

});