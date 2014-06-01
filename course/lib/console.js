exports.getConsole = function(process) {
	var StreamSplitter = require('stream-splitter'),
		splitter = process.stdin.pipe(StreamSplitter('\n'));

	splitter.on('token',function(data){
		splitter.emit('get',data);
	});

	process.stdin.setEncoding('utf8');
	process.stdout.setEncoding('utf8');

	return splitter;
}