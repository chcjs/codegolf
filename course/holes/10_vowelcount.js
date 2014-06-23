var input = require('../lib/console').getConsole(process);

input.on('get',function(data) {
	var noVowels = data.replace(/[aeiou]/ig, ''),
		noY = data.replace(/[y]/ig, ''),
		vowelCount = data.length - noVowels.length,
		yCount = (data.length - noY.length) * 0.5,
		totalVowelCount = yCount + vowelCount;

	console.log(totalVowelCount);
});