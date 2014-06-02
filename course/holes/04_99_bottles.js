var input = require('../lib/console').getConsole(process);

input.on('get',function(data) {
	var count = [];
	for ( var i = 1; i <= 99; i++ ) {
		count.push(i);
	}

	count.reverse();

	count.forEach(function(number) {
		if ( number > 1 ) {
			var bottle = (number - 1 > 1) ? ' bottles' : ' bottle';
			console.log(number + ' bottles of beer on the wall, ' + number + ' bottles of beer.');
			console.log('Take one down and pass it around, ' + (number - 1) + bottle + ' of beer on the wall.');
			console.log('');
		}
		else {
			console.log('1 bottle of beer on the wall, 1 bottle of beer.');
			console.log('Go to the store and buy some more, 99 bottles of beer on the wall.');
		}
	});

});