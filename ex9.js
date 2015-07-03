var slice = Array.prototype.slice;

function logger(namespace) {
	return function() {
		var args = slice.call(arguments);
		args.unshift(namespace);
		console.log.apply(null, args);
	};
}

module.exports = logger;

// Official Solution:

// Nice use of array literal and #concat

// function logger(namespace) {
// 	return function() {
// 		console.log.apply(console, [namespace].concat(slice.call(arguments)));
// 	};
// }