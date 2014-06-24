var input = require('../lib/console').getConsole(process);

function sanitise(word) {
	return word.replace(/[^a-zA-Z0-9]+/g,'').toLowerCase();
}

input.on('get',function(data) {
	var wordStripped = sanitise(data),
		wordReversed = wordStripped.split('').reverse(),
		isPalindrome = true;

	for ( var i = 0; i < wordReversed.length; i++ ) {
		if ( wordStripped[i] !== wordReversed[i] ) {
			isPalindrome = false;
			i = wordReversed.length;
		}
	}

	console.log(isPalindrome);
});