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



// function duckCount() {
// 	return Array.prototype.slice.call(arguments)
// 	.filter(function(obj) {
// 		return Object.prototype.hasOwnProperty.call(obj, 'quack'); 
// 	}).length;
// }

module.exports = duckCount;