function duckCount() {
	function count(args, index, counter) {
		if (index < args.length) {
			return count(args, index + 1, Object.prototype.hasOwnProperty.call(args[index], 'quack') ? counter + 1 : counter );
		}
		else {
			return counter;
		}
	}
	return count(arguments, 0, 0);
}


// Official solution:

// converts 'arguments' to a real array, so you can call #filter on it
// filter leaves only those elems with property quack
// duckCount returns the LENGTH of that array...
// no need for a counter!

// function duckCount() {
// 	return Array.prototype.slice.call(arguments)
// 	.filter(function(obj) {
// 		return Object.prototype.hasOwnProperty.call(obj, 'quack'); 
// 	}).length;
// }

module.exports = duckCount;