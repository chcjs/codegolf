var input = require('../lib/console').getConsole(process);

input.on('get',function(data) {
	var letters = data.split('');

	letters[0] = letters[0].toUpperCase();

	console.log("i" + letters.join(''));
});