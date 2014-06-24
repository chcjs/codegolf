var input = require('../lib/console').getConsole(process);

function isAnagram(word, otherWord) {
	var wordSorted = word.split('').sort(),
		otherWordSorted = otherWord.split('').sort();

	if ( word.length !== otherWord.length ) {
		return false;
	}

	for (var i = 0; i < word.length;  i++) {
       if (wordSorted[i] != otherWordSorted[i]) {
         return false;
       }
	}

	return true;
}

input.on('get',function(data) {
	var words = data.split(',');

	console.log(isAnagram(words[0], words[1]));
});