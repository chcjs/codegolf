var Path = require('path'),
	fs = require('fs'),
	child = require('child_process').fork,
	StreamSplitter = require('stream-splitter'),
	events = require('events');

module.exports = function(path) {
	this.path = path;
	this.errors = [];
	this.diffOutput = [];
	events.EventEmitter.call(this);

	this.hole = function() {
		return parseInt(this.name().split('_')[0]);
	};

	this.name = function() {
		return Path.basename(this.path,'.js');
	};

	this.testDir = function() {
		return this.name();
	};

	this.referenceInput = function() {
		return Path.join(Path.dirname(require.main.filename),'cases', this.testDir(),'in.txt');
	};

	this.referenceOutput = function() {
		return Path.join(Path.dirname(require.main.filename),'cases', this.testDir(),'out.txt');
	};

	this.referenceInputLines = function() {
		return fs.readFileSync(this.referenceInput()).toString().split('\n');
	};

	this.referenceOutputLines = function() {
		return fs.readFileSync(this.referenceOutput()).toString().split('\n');
	};

	this.passed = function() {
		return this.diffOutput.length == 0; //deal with diff later
	}

	this.run = function(cb) {
		this.on('outputComplete',function() {
			this.diff();
		});

		this.on('testComplete',function() {
			if (cb) {
				cb();
			}
		});

		this.test();
	}

	this.diff = function() {
  		var self = this;

  		this.referenceOutputLines().forEach(function(element,index, array) {
  			if ( self.outputContent[index] !== element && element.trim()) {
  				self.diffOutput.push("expected: " + element + " but got: " + self.outputContent[index] );
  			}
  		});

  		self.emit('testComplete');
	};

	this.renderDiff = function() {
		this.diffOutput.forEach(function(line) {
			console.log(line);
		});
	}

	this.test = function() {

		var self = this,
			pipedStdout;

		this.outputContent = [];

		this.runCase = child(Path.resolve('..','holes',this.path),[],{silent: true});
		pipedStdout = this.runCase.stdout.pipe(StreamSplitter('\n'));
		pipedStdout.encoding = 'utf8';

		pipedStdout.on('token', function(line) {
			self.outputContent.push(line);
		});

		pipedStdout.on('done', function() {
			self.emit('outputComplete');
		});

		this.referenceInputLines().forEach(function(item, index, arr){
			self.runCase.stdin.write(item + '\n');

			if ( index == arr.length - 1) {
				self.runCase.stdin.end();
			}
		});
	};

};

module.exports.prototype.__proto__ = events.EventEmitter.prototype;

