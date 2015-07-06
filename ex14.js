
// recursive funnction now returns a function rather than executing

function repeat(operation, num) {
	return function() {
		if (num <= 0) return;
		operation();
		return repeat(operation, --num);
	};
}

// recursive function passes itself out to trampoline,
// trampoline iterates with a while loop..
// each iteration calls the function passed out of repeat
// and assigns the return value (the next recursion) to the variable that the while loop is evaluating

function trampoline(fn) {
	while (fn && typeof fn === 'function') {
		fn = fn();
	}
}

module.exports = function(operation, num) {
	return trampoline(function() {
		return repeat(operation, num);
	});
};