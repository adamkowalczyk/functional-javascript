function Spy(target, method) {
	var oldFunction= target[method];
	
	var result = {
		count: 0
	};

	target[method] = function() {
		result.count++;
		return oldFunction.apply(this, arguments);
	};
	return result;
}

module.exports = Spy;

// This exercise is predicated on a useage pattern of var mySpy = spy(object, method);
// so mySpy.count = n , as mySpy is the return value of Spy