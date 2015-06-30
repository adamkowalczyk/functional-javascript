function doubleAll(array) {
	var doubles = array.map(function(num) {
		return num * 2;
	});
	return doubles;
}

module.exports = doubleAll;