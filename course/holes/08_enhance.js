var input = require('../lib/console').getConsole(process);

function ASCIIEnhancer(text, scaleFactor) {
	this.text = text;
	this.scaleFactor = scaleFactor;

	this.enhance = function() {
		return this.enhanceY(this.enhanceX());
	}

	this.enhanceX = function() {
		var charArray = this.text.replace('\n','').split(''),
			enhancedLine = '';

		charArray.forEach(function(character) {
			for (var i = 0; i < this.scaleFactor; i++) {
				enhancedLine += character;
			}
		}, this);

		return enhancedLine + '\n';
	}

	this.enhanceY = function(line) {
		var enhancedSelf = '';
		for (var i = 0; i < scaleFactor; i++) {
			if ( i == scaleFactor - 1) {
				enhancedSelf += line.replace('\n','');
			}
			else {
				enhancedSelf += line;
			}
		}

		return enhancedSelf;
	}
}

input.on('get',function(data) {
	var enhancer = new ASCIIEnhancer(data, 3);
	console.log(enhancer.enhance());
});