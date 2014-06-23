var input = require('../lib/console').getConsole(process);

input.on('get',function(data) {
	var times = data.split('-'),
		firstTime = times[0].split(':'),
		secondTime = times[1].split(':'),
		firstTimeHours = parseInt(firstTime[0]),
		secondTimeHours = parseInt(secondTime[0]),
		hoursElapsed,
		minutesElapsed;

	if ( firstTimeHours >= secondTimeHours ) {
		hoursElapsed = (24 - firstTimeHours) + secondTimeHours;
	}
	else {
		hoursElapsed = secondTimeHours - firstTimeHours;
	}

	minutesElapsed = hoursElapsed * 60;

	minutesElapsed -= parseInt(firstTime[1]);
	minutesElapsed += parseInt(secondTime[1]);

	console.log(minutesElapsed);
});

