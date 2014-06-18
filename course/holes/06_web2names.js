var input = require('../lib/console').getConsole(process);

WEB2_REGEX = /^(\w*[AEIOUaeiou]+\w+[^AEIOUaeiou])[AEIOUaeiou]+(r)$/;

function web2ify(name) {
	var result = name.match(WEB2_REGEX),
		modifiedString;

	if ( result ) {
		modifiedString = result[1] + result[2];
	}
	else {
		modifiedString = name;
	}

	return modifiedString;
}

input.on('get',function(data) {
	var modifiedName = web2ify(data);
	console.log(modifiedName);
});