// this hurts my brain...

function curryN(fn, n) {
	// fun fact! arity === fn.length!
	n = n || fn.length;
	if (n) {
		// while (n) return an anon function which takes one argument
		// inside that function, recurse and bind the anon func arguemnt to fn
		// so in the end all the arguments of the wrapping functions are passed to fn as 'initial arguments'
		// NB, #bind(this) === #bind(null). Not *changing* value of this, just binding inital args
		return function(arg) {
			return curryN(fn.bind(this, arg), n -1);
		};
	}
	else {
		return fn();
	}
}

module.exports = curryN;

// official solution 

// return function curriedN(arg) {
// 	if (n <= 1) {
// 		return fn(arg);
// 	}
// 	return curryN(fn.bind(this, arg), n - 1);
// };
