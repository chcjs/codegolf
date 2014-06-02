var input = require('../lib/console').getConsole(process);

input.on('get',function(data) {
	var words = [],
		count = 0;

	words = data.split(' ');
	count = words.length;

	console.log(count);
});
