function Lion(name) {
	// body...
	this.name = name;
	this.stomach = [];
}

Lion.prototype.sleep = function() {
	// body...
	console.log('zzzzzz');
};

Lion.prototype.sayHi = function() {
	// body...
	console.log('hi! I"m lion. My name is' + chall.red(this.name));
};

Lion.prototype.eat = function(cat) {
	// body...
	this.stomach.push(cat);
};

module.exports = Lion;