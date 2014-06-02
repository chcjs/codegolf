var input = require('../lib/console').getConsole(process),
	QUADRATIC_ZERO_ORDER_TERM = 4,
	isFibonacci,
	isPerfectSquare;

isPerfectSquare = function(num) {
	return Math.sqrt(num) % 1 == 0;
};

isFibonacci = function(num) {
	var quadraticSecondOrderTerm = 5 * Math.pow(num,2);
	var positiveQuadratic = quadraticSecondOrderTerm + QUADRATIC_ZERO_ORDER_TERM;
	var negativeQuadratic = quadraticSecondOrderTerm - QUADRATIC_ZERO_ORDER_TERM;

	return ( isPerfectSquare(positiveQuadratic) || isPerfectSquare(negativeQuadratic));
};

input.on('get',function(data) {

	var i = parseInt(data);

	if ( isFibonacci(i) ) {
		console.log('y');
	}
	else {
		console.log('n');
	}

});