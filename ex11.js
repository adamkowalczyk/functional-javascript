module.exports = function arrayMap(arr, fn) {
	return arr.reduce(function(prev, current, index, array){
		prev.push( fn(current));
		return prev;
	},[]);
};

// NB array#push doesn't return the array. It returns the *length* (of course..)