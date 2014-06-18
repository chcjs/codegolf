var input = require('../lib/console').getConsole(process);

input.on('get',function(data) {
	var numbers = data.split(' '),
		total = 0;

	numbers.forEach(function(number){
		number = parseInt(number);
		total = total + number;
	});

	console.log(total);

});